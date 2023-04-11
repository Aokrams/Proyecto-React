import React from "react";
import { useEffect, useState } from "react";
import { TablaUsuaria } from "../components";
import { getAll } from "../services/UsuariaService";

const AdminPage = ()=>{

    const [usuaria, setUsuaria]=useState(null);

    const obtenerUsuaria=async()=>{
        setUsuaria(await getAll());
    }

    useEffect(()=>{
        console.log(usuaria)
        obtenerUsuaria();
        
    },[])

    return(
        <div>
            <TablaUsuaria usuaria={usuaria}/>
        </div>
    )
}

export default AdminPage;