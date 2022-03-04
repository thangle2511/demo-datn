import React from 'react';
import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom';
import LoginApp from './components/LoginPage/LoginPage';
import MainTemplate from './components/MainTemplate/MainTemplate'; 



export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= '/admin' element ={<MainTemplate/>}>
                </Route>
                <Route path= '/' element={<LoginApp />}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}