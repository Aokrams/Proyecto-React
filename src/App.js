import React from "react";
import InicioPage from "./pages/InicioPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import TiendaPage from "./pages/TiendaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./css/MenuBar.css"
//import "./css/Inicio.css"
import "./css/Login.css"
import "./css/MenuBarTienda.css"

const App =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<InicioPage/>}></Route>
            <Route path="/AdminPage" element={<AdminPage/>}></Route>
            <Route path="/LoginPage" element={<LoginPage/>}></Route>
            <Route path="/TiendaPage" element={<TiendaPage/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;