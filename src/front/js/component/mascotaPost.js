import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";




const MascotaPost = (props) => {


  

    return(
        <>
    {props.estado == "PERDIDO" ? (<h1 className="display-4 text-center" style={{marginTop: "20px"}}>Estoy perdido!</h1>) : 
    (<h1 className="display-4 text-center" style={{marginTop: "20px"}}>Estoy buscando a mi familia!</h1>)}
    
    <div className="d-flex py-5" style={{justifyContent: "center"}} id="perrito">
        
        <div>
             <img src="https://picsum.photos/id/237/536/354" className="..." alt="..."/>
        </div>
    
        <div className="card" style={{width: '400px'}}>
            <div className="card-body">
                {props.estado == "PERDIDO" ? 
                (<><p>Nombre: {props.nombre}</p>
                <p>Especie: {props.especie}</p>
                <p>Raza: {props.raza}</p>
                <p>Edad: {props.edad}</p>
                <p>Sexo: {props.sexo}</p>
                <p>Fecha de perdido: {props.fechaPerdido}</p>
                <p>Descripción: {props.descripcion}</p>
                <p>Se perdió en: {props.localidad}, {props.departamento}</p>
                </>
                ) : (<> <p>Título: {props.nombre}</p>
                    <p>Especie: {props.especie}</p>
                    <p>Raza: {props.raza}</p>
                    <p>Fecha de registro: {props.fechaReg}</p>
                    <p>Descripción: {props.descripcion}</p>
                    <p>Fue encontrado en: {props.localidad}, {props.departamento}</p>
                    </>
                )}
                
                
             </div>
        </div>
    </div>
     
     </>


    )

}

export default MascotaPost;