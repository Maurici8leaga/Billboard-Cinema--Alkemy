import axios from 'axios';
import swAlert from '@sweetalert/with-react';
// esta es una libreria que te ayuda con los alerts
import { useNavigate } from 'react-router-dom';

function Login() {

    const history = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        // <- evita que desencadene la accion por defecto en pocas palabras que envie el formulario a un lado

        // <--- this is the user validation process ---->
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Esto es una expresion regular expression el cual ayuda a verificar que el correo sea verdadero o no
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (email === '' || password === '') {
            swAlert({
                title: "The fields must not be empty",
                icon: "warning"
            });
            // al colocarle el return da prioridad a este if statement si no se cumple no pasara a otro if si es que llega haber otro
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swAlert({
                title: "You should type a valid email",
                icon: "warning"
            });
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert({
                title: "invalid credentials",
                icon: "error"
            });
        }
        // <-----------    -------------------------> 

        // <----  envio de datos al API (peticiones http) ---> 

        // esto podria ir en un folder llamado actions y convertir esto dentro una funcion y ser llamada aca como un accion
        axios
            .post('http://challenge-react.alkemy.org/', { email, password })
            // el link proporcionado es un simulador de un API el cual este viene del curso
            .then(res => {
                swAlert({
                    title: "Okey, you are ready",
                    icon: "success"
                });
                const tokenInbound = res.data.token;
                localStorage.setItem('token', tokenInbound);
                // 1er argumento es el nombre del elemento que queremos, el 2do el contenido que queremos almacenar en el 1er argumento

                // redirect after login
                history("/list");
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
                    <span>Contraseña:</span> <br />
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login;