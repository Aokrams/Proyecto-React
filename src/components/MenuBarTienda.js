import React from "react";
import Logo from "../components/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faMagnifyingGlass, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

const MenuBarTienda = () => {
    return (
        <header>
            <div class="principalTienda">
                <div class="puntosTienda">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div class="casaTienda">
                    <a href="/">
                        <FontAwesomeIcon icon={faHouse} />
                    </a>
                </div>
                <div class="logoTienda">
                    <img src={Logo} alt=""></img>
                </div>
                <div class="buscarTienda">
                    <input type="text" placeholder="Buscar" required></input>
                    <div className="LupaTienda">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div class="perfilTienda">
                    <a href="/LoginPage"><FontAwesomeIcon icon={faUser} /></a>
                </div>
                <div class="bolsoTienda">
                    <a href=""><FontAwesomeIcon icon={faBagShopping} /></a>
                </div>
            </div>
        </header>
    )
}

export default MenuBarTienda;