import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout'; //
import Applayout from '../layout/App-layout';
import Contact from '../components/Portfolio/Contact';
import About from '../components/portfolio/About';
import Services from '../components/portfolio/Services';
import Work from '../components/portfolio/Work';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import { AdminDashboard } from '../components/Dashboard/dashboard';

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Applayout />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
                 <Route path="/login" element={<Login />} />
            </Route>

                
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<AdminDashboard />} />
            </Route>
        </Routes>
    );
}