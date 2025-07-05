import { mockStories } from './mockStories';

export const getStories = (): Promise<typeof mockStories> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockStories);
    }, 1000);
  });
};
