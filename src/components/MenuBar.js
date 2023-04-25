import React from "react";
import Logo from "./images/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"

const MenuBar = () => {
    return (
            <header>
                <div className="principalMenu">
                    <div className="logoMenu">
                        <img src={Logo} alt="logo"></img>
                    </div>
                    <a href="/">Inicio</a>
                    <a href="#">Eventos</a>
                    <a href="#">Red Apoyo</a>
                    <a href="/TiendaPage">Tienda</a>
                    <a href="#">Contacto</a>
                    <div class="perfilMenu">
                        <a href="/LoginPage"><FontAwesomeIcon icon={faUser}/></a>
                    </div>
                </div>
            </header>
    )
}

export default MenuBar;