import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { Loader, PrivateRoute } from "./layout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />} loader={() => <Loader />}>
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

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

