import { useState } from "react";
import TextH2 from "./TextH2";

//creamos nuestro componente
const Text =() => {
    //creamos un estado
    //entre corchete nombre variable y nombre de la funcion que cambia el estado
    //show booleano
    const [show, setShow]=useState(true);

    function handleShow(){
        setShow(!show);
        //para mostar este cambio
        //console.log(show);
    }
    
    //lo que devuelve el jsx 
    //podemos añadir condiciones con un operador ternario
    //podriamos haber hecho esto tambien {show === true ? <h2>Hola mundo</h2> : <h2>Adios mundo</h2>} 
    // o esto {show === true ? <h2>Hola mundo</h2> : ""} 
    //de esta forma hago referencia a otro componente desde de un componente
    return(
    <div>
        <button onClick={handleShow}>{show === true ? "Ocultar" : "Mostrar"} </button>    
        {show && <TextH2/>}
    </div>
    )
};

export default Text;

//