import React from "react";

const TablaUsuaria = ({ usuaria }) => {
    return (
        <div className='col-8'>
            <h1>Usuarias</h1>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {usuaria.map(usu => (
                        <tr>
                            <th scope="row">{usu.usuaria_id}</th>
                            <td>{usu.nombre}</td>
                            <td>{usu.apellido}</td>
                            <td>{usu.telefono}</td>
                            <td>{usu.correo}</td>
                            <td>{usu.contrasenia}</td>
                            <td><button type="button" class="btn btn-warning">Editar</button>
                                <button type="button" class="btn btn-danger ms-2">Eliminar</button></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default TablaUsuaria;
