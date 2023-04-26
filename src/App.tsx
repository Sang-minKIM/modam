import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home } from "./pages";
import { Join } from "./pages/About/Join";
import { Login } from "./pages/About/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<About />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
