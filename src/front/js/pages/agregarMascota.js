import React from "react";

export const AgregarMascota = () =>{
    return(
            <>
            <h2 className="mt-5" style={{textAlign: "center"}}>Perdiste a tu mascota? Completá el siguiente formulario:</h2>
            <div className="container-fluid" id="contformagregar">
                <div className="input-group mb-3">
                    <label className="text-secondary" for="formNombre">Nombre:</label>
                    <input type="text" className="form-control" placeholder="Nombre de tu mascota" id="formNombre" />
                </div>
                <div className="input-group mb-3">
                    <label className="text-secondary" for="formFecha">¿Cuando se perdió su mascota?</label>
                    <input type="date" className="form-control" id="formFecha"/>
                </div>
                
                <div className="input-group mb-3">
                    <label className="text-secondary" for="formEdad">Edad:</label>
                    <input type="number" className="form-control" placeholder="Edad de tu mascota" id="formEdad" />
                </div>
                <div className="input-group mb-3">
                    <label className="text-secondary" for="formDesc">Descripción:</label>
                    <textarea className="form-control" placeholder="Agrega aquí una descripción de tu mascota. Todos los detalles son importantes para poder identificarla" id="formDesc"></textarea>
                </div>
                
                    <label>Contacto</label><br></br>
                    <label className="text-secondary">Garantizamos la seguridad de tus datos personales. Tus datos serán compartidos unicamente con usuarios registrados en nuestra web solo so informan haber encontrado a tu mascota.</label>
                <div className="input-group mb-3">
                    <input type="tel" className="form-control" placeholder="Ingrese aquí su número de contacto"></input>
                </div>
                <label for="formDep" className="text-secondary">Seleccione el departamento donde se perdió su mascota:</label>
                <div class="input-group mb-3">
                    <select class="form-select" id="formDep" aria-label="Floating label select example">
                        <option selected>Departamento</option>
                        <option value="1">Artigas</option>
                        <option value="2">Cerro Largo</option>
                        <option value="3">Durazno</option>
                    </select>
                    
                </div>
                <label for="formLoc" className="text-secondary">Seleccione la localidad donde se perdió su mascota:</label>
                <div className="input-group mb-3">
                    <select class="form-select" id="formLoc" aria-label="Floating label select example">
                            <option selected>Localidad</option>
                            <option value="1">Artigas</option>
                            <option value="2">Bella Unión</option>
                            <option value="3">Gomensoro</option>
                    </select>
                    
                </div>
                <label for="FormArchivo" className="text-secondary">Subir imágen</label>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="formArchivo"/>
                </div>
                <button id="botonEnviar">Enviar</button>
              </div>
                    
                </>    
                    );
                    };