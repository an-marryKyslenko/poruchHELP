import dayjs from 'dayjs';
import { z } from 'zod';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'; // Не забудь імпортувати і підключити плагіни
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

const today = new Date();
const maxDate = new Date();

maxDate.setFullYear(today.getFullYear() + 2);

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export const storySchema = z.object({
  title: z.string().min(3),
  shortDescription: z.string().min(30).max(300),
  fullDescription: z.string().min(10),
  goalAmount: z.number().min(1),
  endDate: z
    .string()
    .nonempty('Дата обовʼязкова')
    .refine(
      value => {
        const parsedDate = dayjs(value);

        if (!parsedDate.isValid()) {
          return false;
        }

        const dateToCheck = parsedDate.startOf('day');
        const now = dayjs().startOf('day');
        const max = dayjs().add(2, 'year').endOf('day');

        return (
          dateToCheck.isSameOrAfter(now) && dateToCheck.isSameOrBefore(max)
        );
      },
      {
        message: 'Дата має бути в межах від сьогодні до 2 років включно',
      },
    ),
  isUrgent: z.boolean().optional(),
  image: z
    .any()
    .refine(file => file instanceof File, { message: 'File is required' }),
});
