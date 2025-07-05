import { Route, Routes } from 'react-router-dom';
import Layout from './modules/shared/components/Layout/Layout';
import Home from './modules/home/pages/Home/Home';
import Login from './modules/auth/pages/Login/Login';
import Regist from './modules/auth/pages/Regist/Regist';
import Stories from './modules/stories/Stories';
import AddStory from './modules/add-story/pages/AddStory';
import Profile from './modules/profile/pages/Profile';
import ProfileLayout from './modules/profile/components/ProfileLayout';
import Settings from './modules/profile/pages/Settings';
import Activity from './modules/profile/pages/Activity';
import MyStories from './modules/profile/pages/MyStories';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Regist />} />
        <Route path="stories" element={<Stories />} />
        <Route path="add-story" element={<AddStory />} />
        <Route path="my" element={<ProfileLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="my-stories" element={<MyStories />} />
          <Route path="settings" element={<Settings />} />
          <Route path="activity" element={<Activity />} />
        </Route>
      </Route>
    </Routes>
  );
};
