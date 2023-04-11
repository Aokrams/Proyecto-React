import React from "react";
import { MenuBar } from "../components";
import ImgPrin from "../components/images/ImgPrin.png"
import "../css/Inicio.css"

const InicioPage = () => {
    return (
        <div className="Cuerpo">
            <MenuBar />
            <div>
                <div>
                    <div className="FondoTranslusido"></div>
                    <div class="titulo">
                        <h1>Fenoline</h1>
                    </div>
                    <div class="frase">
                        <h2>Un espacio para nosotras</h2>
                    </div>
                    <div class="frase2">
                        <h2>y nuestros logros</h2>
                    </div>
                </div>
                <div class="boton">
                    <button type="button" class="btn btn-info">Ver Mas</button>
                </div>
                <div class="imagenPortada">
                    <img src={ImgPrin} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default InicioPage;