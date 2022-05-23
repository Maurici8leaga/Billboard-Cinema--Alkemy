// import { renderHook } from "@testing-library/react";
import axios from 'axios';

function Login() {

    const submitHandler = (e) => {
        e.preventDefault();
        // <- evita que desencadene la accion por defecto en pocas palabras que envie el formulario a un lado

        // <--- this is the user validation process ---->
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Esto es una expresion regular expression el cual ayuda a verificar que el correo sea verdadero o no
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;


        if(email === '' || password === ''){
            console.log('the fields must not be empty');
            // al colocarle el return da prioridad a este if statement si no se cumple no pasara a otro if si es que llega haber otro
            return;
        }

        if(email !== '' && !regexEmail.test(email)){
            console.log('you should type a valid email');
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react'){
            console.log('invalid credentials');
        }
        
        console.log('Ok we are ready to send the info');
        // <-----------    -------------------------> 

        // <----  envio de datos al API (peticiones http) ---> 

            // esto podria ir en un folder llamado actions y convertir esto dentro una funcion y ser llamada aca como un accion
        axios
            .post('http://challenge-react.alkemy.org/', {email, password})
            .then(res => {
                console.log(res.data);
            })
    }


    return (
        <>

            <h2>Formulario</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo Electronico:</span> <br />
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    <span>Contraseña:</span> <br/>
                    <input type="password" name="password" />
                </label>
                <br/>
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login;