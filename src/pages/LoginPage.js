import React from "react";
import { MenuBar } from "../components";
import PlantasLog from "../components/images/PlantasLog.png"
import ChatBubble from "../components/images/ChatBubble.png"
import MujerSentada from "../components/images/MujerSentada.png"

const LoginPage = () => {
    return (
        <div className="CuerpoLogin">
            <MenuBar />
            <div>
                <div className="fondoClaroLogin"></div>
                <div className="Log">
                    <div className='col-8'>
                        <h1>Acceder</h1>
                        <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Correo</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ejemplo@email.com" />
                        </div>
                        <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="********" />
                        </div>
                        <div class="mb-1">
                            <button type="button" class="btn btn-primary">Login</button>
                        </div>
                        <div class="mb-2">
                            <a href="" className="botonRegistroLogin">
                                <button type="button" class="btn btn-primary">Registrarse</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contenedorImagenLogin">
                <div className="Plantas">
                    <img src={PlantasLog} alt=""></img>
                </div>
                <div className="Burbuja">
                    <img src={ChatBubble} alt=""></img>
                </div>
                <div className="MujerSentada">
                    <img src={MujerSentada} alt=""></img>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;