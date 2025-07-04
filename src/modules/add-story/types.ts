export type NewStory = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  goalAmount: number;
  endDate: string;
  isUrgent?: boolean;
  imageUrls: string[];
  contactEmail?: string;
  contactPhone?: string;
};

export type StoryFormData = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  goalAmount: number;
  endDate: string;
  isUrgent?: boolean;
  image?: File;
};
