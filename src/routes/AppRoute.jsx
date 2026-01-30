import Applayout from '../layout/App-layout'
import { Routes, Route } from 'react-router-dom'
import LenisScroll from '../components/LenisScroll'
import Contact from '../components/Contact'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />  
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Applayout />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            </>
    )}
