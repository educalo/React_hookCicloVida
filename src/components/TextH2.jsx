import { useState,useEffect } from "react";

//creamos nuestro componente
//cada vez que el imput cambie lo haga tambien el h2
const TextH2 =() => {
    //estado
    const [text, setText] = useState("");

    //e seria el evento utilizado
    const handleText = (e) => {
        //obtenemos los valores pasados por ese evento
        //console.log(e.target.value);
        setText(e.target.value);
    }

    //los componentes en react tienen un ciclo de vida
    //1.- montaje => mounting
    //2.- actualizacion => updating
    //3.- desmontaje => unmounting

    //recibe dos parametros, el primero una funcion y el segundo optativo un array 
    //useEffect se utiliza cada vez que el componente se monta o se actualiza
    //si ponemos como array [] solo se dispara cuando se monta el componente pero no cuando se actualiza
    //useEffect( () =>{console.log("Componente montado") },[]);
    useEffect( () =>{
        console.log("Componente montado");

        //se ejecuta cuando el componente se desmonta
        return () =>{
            console.log("Desmontando componente");
        }
    },[]);

    //cuando cambia algo en concreto de nuestro componente
    useEffect( () =>{
        console.log("Text Modificado");

        //se ejecuta cuando el componente se desmonta
        return () =>{
            console.log("Desmontando componente");
        }
    },[text]);

    //jsx
    return(
        <div>
            <input type="text" onChange={handleText}/>
            <h2>{text}</h2>
        </div>  
    )
};

export default TextH2;

