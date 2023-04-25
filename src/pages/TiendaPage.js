import React from "react";
import { useState } from "react";
import MenuBarTienda from "../components/MenuBarTienda";
import PiePagina from "../components/PiePagina";
import ImgPageTienda from "../components/images/ImgPageTienda.png"
import Figura1 from "../components/images/Figura1.png"
import Figura2 from "../components/images/Figura2.png"
import Figura3 from "../components/images/Figura3.png"
import Figura4 from "../components/images/Figura4.png"
import Figura5 from "../components/images/Figura5.png"
import CalzaNegra from "../components/images/CalzaNegra.jpg"
import CalzaRosada from "../components/images/CalzaRosada.jpg"
import CalzaVerde from "../components/images/CalzaVerde.jpg"
import CalzaAzulBolsillo from "../components/images/CalzaAzulBolsillo.jpg"
import "../css/Tienda.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
//para que funcione el dropdown se intala en la terminal: npm i bootstrap reactstrap

const TiendaPage = () => {
    const [dropdownCuerpos, setDropdownCuerpos] = useState(false);
    const abrirCerrarDropdownCuerpos = () => {
        setDropdownCuerpos(!dropdownCuerpos);
    }
    const [dropdownCategoria, setDropdownCategoria] = useState(false);
    const abrirCerrarDropdownCategoria = () => {
        setDropdownCategoria(!dropdownCategoria);
    }
    const [dropdownTalla, setDropdownTalla] = useState(false);
    const abrirCerrarDropdownTalla = () => {
        setDropdownTalla(!dropdownTalla);
    }

    return (
        <div>
            <MenuBarTienda />
            <div className="cuerpoTienda">
                <div className="fondoBlancoTienda"></div>
                <div>
                    <div className="imagenTienda">
                        <img src={ImgPageTienda}></img>
                    </div>
                    <div className="tiposCuerpo">
                        <img src={Figura1}></img>
                        <img src={Figura2}></img>
                        <img src={Figura3}></img>
                        <img src={Figura4}></img>
                        <img src={Figura5}></img>
                    </div>
                </div>
                <div className="productosPrincipalTienda">
                    <div className="desplegablesTienda">
                        <div>
                            <div>
                                <Dropdown isOpen={dropdownCuerpos} toggle={abrirCerrarDropdownCuerpos}>
                                    <DropdownToggle caret className="dropdownTipoCuerpo">
                                        Tipo de Cuerpo
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Rectangulo</DropdownItem>
                                        <DropdownItem>Triangulo</DropdownItem>
                                        <DropdownItem>Triandulo Invertido</DropdownItem>
                                        <DropdownItem>Ovalo</DropdownItem>
                                        <DropdownItem>Reloj de Arena</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Dropdown isOpen={dropdownCategoria} toggle={abrirCerrarDropdownCategoria}>
                                    <DropdownToggle caret className="dropdownCategoria">
                                        Categoria
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Polera</DropdownItem>
                                        <DropdownItem>Leggins</DropdownItem>
                                        <DropdownItem>Bikers</DropdownItem>
                                        <DropdownItem>CropTop</DropdownItem>
                                        <DropdownItem>Petos</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Dropdown isOpen={dropdownTalla} toggle={abrirCerrarDropdownTalla}>
                                    <DropdownToggle caret className="dropdownTalla">
                                        Talla
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>S</DropdownItem>
                                        <DropdownItem>M</DropdownItem>
                                        <DropdownItem>L</DropdownItem>
                                        <DropdownItem>XL</DropdownItem>
                                        <DropdownItem>XXL</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetasProductos">
                        <div class="card" style={{ width: "15rem", height: "28rem", margin: "0 10px" }}>
                            <img src={CalzaNegra} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Calza Negra</h5>
                                <p class="card-text">Calza tan negra como la vida</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style={{ width: "15rem", height: "28rem", margin: "0 10px" }}>
                            <img src={CalzaRosada} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Calza Rosada</h5>
                                <p class="card-text">Calza tan rosada como Vanish</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style={{ width: "15rem", height: "28rem", margin: "0 10px" }}>
                            <img src={CalzaVerde} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Calza Verde</h5>
                                <p class="card-text">Calza tan verde como el pasto</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div class="card" style={{ width: "15rem", height: "28rem", margin: "0 10px" }}>
                            <img src={CalzaAzulBolsillo} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Calza Azul con bolsillos</h5>
                                <p class="card-text">Calza tan azul y con bolsillos como los jeans</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PiePagina />
        </div>
    )
}

export default TiendaPage;