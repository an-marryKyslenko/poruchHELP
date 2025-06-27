import { Route, Routes } from 'react-router-dom';
import Layout from './modules/shared/components/Layout/Layout';
import Home from './modules/home/pages/Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<div>Login</div>} />
          <Route path="logup" element={<div>Regist</div>} />
        </Route>
      </Routes>
    </>
  );
};
