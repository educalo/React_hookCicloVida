import { useState } from "react";

//esto es un componente en react
const Counter = () =>{
    //parte para logica js
    //de forma tradicional podriamos haber inicializado la variable como se ve
    //let number=0;

    //los estados van hacer que cuando cambien de valor van a forzar a volver a ser renderizados
    //es mejor establecer un estado
    //desectructuramos un objeto en forma de array, siempre hay una variable y una funcion
    //al poner useState no lo importanta directamente al principio del fichero
    //la variable es la que nosotros queremos crear, y es la que puede cambiar de valor
    //useState es un hook de react y cuando algo cambia de estado el componente se vuelve a renderizar 
    //la funcion es con la que vamos a cambiar el estado
    const [number, setNumber] = useState(0);



    const sumar= () =>{
        //no no hubieramos definido el estado podriamos haber hecho esto siguiente, ahora debemos crear una funcion tal como se muestra
        //number= number+1;
        //podriamos hacer un getElementbyid para modificar al nuevo valor
        //en react esto cambia y para ello utilizamos los estados.
        setNumber(number+1);
    }
    const restar= () =>{
        //no no hubieramos definido el estado podriamos haber hecho esto siguiente, ahora debemos crear una funcion tal como se muestra
        //number= number+1;
        //podriamos hacer un getElementbyid para modificar al nuevo valor
        //en react esto cambia y para ello utilizamos los estados.
        setNumber(number-1);
    }

    //retornamos jsx, que es mezcla de html y js. React renderiza de forma interna toda esta informacion
    return (
        <div>
            <button onClick={restar}>Restar</button>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <hr />
        </div>
    )
};

export default Counter;