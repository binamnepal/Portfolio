import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Applayout from '../layout/App-layout';
import Contact from '../components/Homepage/Contact';
import About from '../components/Homepage/About';  
import Services from '../components/Homepage/Services';
import Work from '../components/Homepage/Work';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

export default function AppRoute() {
    return (
        <Routes>
          
            <Route element={<MainLayout />}>
                <Route path="/" element={<Applayout />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
        </Route>
            
        </Routes>
    );
}