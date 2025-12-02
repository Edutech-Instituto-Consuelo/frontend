import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";

export default function App() {
    return (
        <div className="grid grid-rows-[1fr_auto] h-screen">
            <Navbar />
            <main className="pt-navbar">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
