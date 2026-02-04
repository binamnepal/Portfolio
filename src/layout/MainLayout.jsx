import { Outlet } from 'react-router-dom';
import Navbar from '../components/portfolio/Navbar';
import LenisScroll from '../components/portfolio/LenisScroll';

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