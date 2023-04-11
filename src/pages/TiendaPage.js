import React from "react";
import MenuBarTienda from "../components/MenuBarTienda";
import ImagenCuadrada from "../components/images/ImagenCuadrada.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import "../css/Tienda.css"

const TiendaPage = () => {
    return (
        <div>
            <MenuBarTienda />
            
                <h2>Modern Women Strong Women</h2>
                <FontAwesomeIcon icon={faEllipsis} fontSize={100} color="rgb(218, 137, 7)"/>
                <button type="button" className="BotonInfoTienda">Mas Informacion</button>
                <div className="MujerCuadro">
                    <img src={ImagenCuadrada} alt="MujerCuadro"></img>
                </div>
                
            
        </div>
    )
}

export default TiendaPage;