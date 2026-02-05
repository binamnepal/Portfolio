import { Outlet } from 'react-router-dom';
import Navbar from '../components/Homepage/Navbar';
import LenisScroll from '../components/Homepage/LenisScroll';

const MainLayout = () => {
  return (
    <>
      <LenisScroll />
      <Navbar /> 
      <Outlet />
    </>
  );
};

export default MainLayout;