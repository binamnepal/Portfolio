import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'   
import Applayout from './layout/App-layout'
import LenisScroll from './components/LenisScroll'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Applayout />} />
            </Routes>
        </>
    )
}