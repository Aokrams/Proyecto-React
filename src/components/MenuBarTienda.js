import React from "react";
import Logo from "../components/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

const MenuBarTienda = () => {
    return (
        <header>
            <div class="principalTienda">
                <div class="logoTienda">
                    <img src={Logo} alt=""></img>
                </div>
                <a href="/">Inicio</a>
                <a href="#">Eventos</a>
                <a href="#">Red Apoyo</a>
                <a href="/TiendaPage">Tienda</a>
                <a href="#">Contacto</a>
                <div class="perfilMenuTienda">
                    <a href="/LoginPage"><FontAwesomeIcon icon={faUser} /></a>
                </div>
                <div className="carritoTienda">
                    <a href=""><FontAwesomeIcon icon={faBagShopping} /></a>
                </div>
            </div>


        </header>
    )
}

export default MenuBarTienda;