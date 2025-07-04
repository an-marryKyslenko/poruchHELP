import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import UploadIcon from '@mui/icons-material/Upload';
import { StoryFormData } from '../../types';

const FileUploadField = () => {
  const { control, watch, setError, clearErrors } =
    useFormContext<StoryFormData>();
  const selectedFile = watch('image');
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedFile || !(selectedFile instanceof File)) {
      return;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (!validTypes.includes(selectedFile.type)) {
      setError('image', {
        type: 'manual',
        message: 'Only .jpg, .jpeg or .png files are allowed',
      });
      setPreview(null);

      return;
    }

    clearErrors('image');

    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, setError, clearErrors]);

  return (
    <Controller
      name="image"
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <Box>
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadIcon />}
          >
            Завантажити фото
            <input
              type="file"
              hidden
              accept=".jpg,.jpeg,.png"
              onChange={e => {
                const file = e.target.files?.[0];

                if (file) {
                  onChange(file);
                }
              }}
            />
          </Button>

          {selectedFile instanceof File && (
            <Typography variant="body2" mt={1}>
              Обрано: {selectedFile.name}
            </Typography>
          )}

          {error && (
            <Typography color="error" variant="caption">
              {error.message}
            </Typography>
          )}

          {preview && (
            <Box mt={2}>
              <img
                src={preview}
                alt="Preview"
                style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8 }}
              />
            </Box>
          )}
        </Box>
      )}
    />
  );
};

export default FileUploadField;
