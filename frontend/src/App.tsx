import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'

import HomePage from './pages/home.page'
import LoginPage from './pages/Auth/Login/login.page'
import RegisterPage from './pages/Auth/Register/register.page'
import UsersPage from './pages/Users/users.page'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true, }}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/users" element={<UsersPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
