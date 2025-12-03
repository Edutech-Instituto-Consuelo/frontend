import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import logoBlack from "./assets/simbolo_black.svg";
import { ToastContainer, Slide } from "react-toastify";

export function PrivateRoute() {
    const { user, loading } = useAuth();
    const location = useLocation();
    const from = location.pathname || "/";
    const roleBasedPath = from.split("/")[1];
    const notProtectedRoutes = ["/", "/login", "/register", "/explorar"];

    if (loading)
        return <Loader />;

    if (user && (from === "/login" || from === "/register"))
        return <Navigate to={"/"+user?.role} replace />;

    if (user && roleBasedPath && user.role !== roleBasedPath)
        return <Navigate to={"/"+user?.role} replace />;

    if (!user && !notProtectedRoutes.includes(from))
        return <Navigate to="/login" replace state={{ from }} />;

    return <Layout />;
}

export function Layout() {
    return (
        <div className="grid grid-rows-[1fr_auto] h-screen">
            <Navbar />
            <main className="pt-navbar">
                <Outlet />
            </main>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
        </div>
    );
}

export function Loader() {
    return (
        <div className="grid h-screen w-screen z-50 place-items-center">
            <img src={logoBlack} alt="Carregando..." className="h-30 animate-pulse duration-2000" />
        </div>
    );
}
