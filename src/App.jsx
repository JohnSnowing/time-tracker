import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
import Home from "./pages/Home";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

function App() {
    const [activeUser] = useContext(UserContext);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={<AuthLayout />}>
                        <Route index element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute user={activeUser}>
                                <Home user={activeUser} />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
