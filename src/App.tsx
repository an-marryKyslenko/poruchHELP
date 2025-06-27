import { Route, Routes } from 'react-router-dom';
import Layout from './modules/shared/components/Layout/Layout';
import Home from './modules/home/pages/Home/Home';
import Login from './modules/auth/pages/Login/Login';
import Regist from './modules/auth/pages/Regist/Regist';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logup" element={<Regist />} />
        </Route>
      </Routes>
    </>
  );
};
