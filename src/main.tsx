import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/Login/index.tsx'
import NotFound from './pages/NotFound.tsx'
import Register from './pages/Register.tsx'
import { useAuth } from './hooks/useAuth.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)

function PrivateRoute() {
    const { user, loading } = useAuth();
    const location = useLocation();
    const from = location.pathname || "/";
    const roleBasedPath = from.split("/")[1];
    const notProtectedRoutes = ["/", "/login", "/register", "/explorar"];

    if (loading)
        return <div>Carregando...</div>;

    if (user && (from === "/login" || from === "/register"))
        return <Navigate to={"/"+user?.role} replace />;

    if (user && roleBasedPath && user.role !== roleBasedPath)
        return <Navigate to={"/"+user?.role} replace />;

    if (!user && !notProtectedRoutes.includes(from))
        return <Navigate to="/login" replace state={{ from }} />;

    return <Outlet />;
}
