import React from "react";
import { MenuBar } from "../components";
import ImgPrin from "../components/images/ImgPrin.png"
import "../css/Inicio.css"
import TipEjercicio from "../components/images/TipHazEjercisio.png"
import TipComer from "../components/images/TipComeSano.png"
import TipMedita from "../components/images/TipMedita.png"
import Especialista1 from "../components/images/Especialista1.png" 
import Especialista2 from "../components/images/Especialista2.png"
import Especialista3 from "../components/images/Especialista3.png"
import Especialista4 from "../components/images/Especialista4.png"
import ProductosPortada from "../components/images/TiendaProductos.png"
import RomboDorado from "../components/images/RomboDorado.png"

const InicioPage = () => {
    return (
        <div>
            <MenuBar />
            <div className="CuerpoInicio">
                <div className="FondoTranslusido"></div>
                <div className="ContenedorPrimerVista">
                    <div class="titulo">
                        <h1>Fenoline</h1>
                    </div>
                    <div class="fraseInicio">
                        <h2>Un espacio para nosotras<br/>
                        y nuestros logros</h2>
                    </div>
                    <div class="boton">
                        <button type="button">Ver Mas</button>
                    </div>
                </div>
                <div className="FondoOscuroRedApoyo"></div>
                <div class="imagenPortada">
                    <img src={ImgPrin} alt=""></img>
                </div>
                <div className="VisitaRedApoyo">
                    <div className="RedApoyoTitulo">
                        <h1>Red De Apoyo</h1>
                    </div>
                    <div className="TipEjercicio">
                        <img src={TipEjercicio} alt=""></img>
                    </div>
                    <div className="TipComer">
                        <img src={TipComer} alt=""></img>
                    </div>
                    <div className="TipMedita">
                        <img src={TipMedita} alt=""></img>
                    </div>
                    <div className="RomboDorado">
                        <img src={RomboDorado} alt=""></img>
                    </div>
                    <div className="RomboDoradoGrande">
                        <img src={RomboDorado} alt=""></img>
                    </div>
                    <div className="DescripcionRedApoyo">
                        <h3>Nuestra Red de Apoyo<br/>
                        cuenta con un espacio<br/>
                        para compartir nuestras<br/>
                        pequeñas metas que<br/>
                        nos propongamos,<br/>
                        ademas que contamos<br/>
                        con especialistas<br/>
                        especializados en sus<br/>
                        respectivas areas<br/>
                        los cuales les daran<br/>
                        algunos consejos</h3>
                    </div>
                </div>
                <div className="ParteRosada">
                    <img src={Especialista1} alt="" className="Espec1"></img>
                    <img src={Especialista2} alt="" className="Espec2"></img>
                    <img src={Especialista3} alt="" className="Espec3"></img>
                    <img src={Especialista4} alt="" className="Espec4"></img> 
                </div>
                <div className="FondoOscuroTienda"></div>
                <div className="VisitaTienda">
                    <h1>VISITA NUESTRA<br/>
                    TIENDA</h1>
                    <h2>Tenemos el espacio<br/>
                    perfecto para que<br/>
                    encuentres tu ropa segura</h2>
                    <div className="BotonVerTienda">
                        <button type="button">Ver Tienda</button>
                    </div>
                    <div className="ProductosPortada">
                        <img src={ProductosPortada} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InicioPage;