import profileImage from './img/profile_3135715.png';

export const mockStories = [
  {
    id: '1',
    title: 'Допомога Олександру на операцію',
    description:
      'Олександру потрібна термінова операція на серці у київській клініці...',
    image: profileImage,
    goal: 10000,
    raised: 4200,
    urgent: true,
  },
  {
    id: '2',
    title: 'Збір для Юлії',
    description: 'Юлії потрібно пройти курс реабілітації після травми...',
    image: profileImage,
    goal: 8000,
    raised: 3000,
    urgent: false,
  },
  {
    id: '3',
    title: 'Допомога Андрію',
    description: 'Андрію поставили діагноз і потрібні кошти на лікування...',
    image: profileImage,
    goal: 15000,
    raised: 10000,
    urgent: true,
  },
];
