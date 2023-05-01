import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Join, Login } from "./pages";

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
