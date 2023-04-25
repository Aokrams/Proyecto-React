import React from "react";
import "../css/PiePagina.css"
import Logo from "../components/images/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";

const PiePagina = () => {
    return (
        <div className="footerCompleto">
            <footer>
                <div className="seccion1Footer">
                    <div>
                        <ul className="seccionesFooter">
                            <li>
                                <a href="">
                                    Productos
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Preguntas Frecuentes
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="centroFooter">
                        <img src={Logo} alt="" className="logoFooter"></img>
                        <ul className="redesSocialesFooter">
                            <li>
                                <a href="https://es-la.facebook.com/">
                                    <FontAwesomeIcon icon={faSquareFacebook} />
                                    @facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                    @instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="correoFooter">
                            <li>
                                <a href="https://www.google.com/intl/es-419/gmail/about/">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    fenoseri_lugarseguro
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faSquareWhatsapp} />
                                    +569 12345678
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </footer>
            <div className="pieDelPie">
                    <hr/>
                    <p>
                        <FontAwesomeIcon icon={faCopyright} />
                        Fenoseri 2023. Todos los Derechos Reservados.
                    </p>
                </div>
        </div>
    )
}

export default PiePagina;