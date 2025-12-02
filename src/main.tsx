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
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/professor">
                        <Route index element={<div><h2>Dashboard Professor</h2></div>} />
                        <Route path="/professor/meus-cursos" element={<div><h2>Meus Cursos</h2></div>} />
                    </Route>

                    <Route path="/aluno">
                        <Route index element={<div><h2>Dashboard Aluno</h2></div>} />
                        <Route path="/aluno/meus-cursos" element={<div><h2>Meus Cursos</h2></div>} />
                    </Route>

                    <Route path="/admin">
                        <Route index element={<div><h2>Dashboard Admin</h2></div>} />
                        <Route path="/admin/cursos" element={<div><h2>Cursos</h2></div>} />
                    </Route>
                </Route>

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
