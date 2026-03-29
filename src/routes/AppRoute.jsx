import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Applayout from '../layout/App-layout';
import Contact from '../components/Homepage/Contact';
import About from '../components/Homepage/About';  
import Services from '../components/Homepage/Services';
import Work from '../components/Homepage/Work';
import Login from '../pages/Login';
import { AdminDashboard } from '../components/Dashboard/dashboard';
import Analytics from '../components/Dashboard/Analytics';
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
                
                <Route element={<PublicRoute />}>

                </Route>
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<AdminDashboard />}>
                    <Route path="analytics" element={<Analytics />} />
                </Route>
            </Route>
            
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}