import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
    const Dashboard = React.lazy(() => import("./layouts/Dashboard"))
    const Login     = React.lazy(() => import("./layouts/Login"))
    const Register  = React.lazy(() => import("./layouts/Register"))
    const loading   = ('')

    return (
        <BrowserRouter>
            <React.Suspense fallback={loading}>
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
