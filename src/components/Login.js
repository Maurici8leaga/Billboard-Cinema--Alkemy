import axios from "axios";
import swAlert from "@sweetalert/with-react";
// esta es una libreria que te ayuda con los alerts
import { useNavigate, Navigate } from "react-router-dom";
import "../css/style.css";

function Login() {
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		// <--- this is the user validation process ---->
		const email = e.target.email.value;
		const password = e.target.password.value;

		// regular expresion for email verification
		const regexEmail =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		// <------ Setting the condtion for acces to the page ----->

		if (email === "" || password === "") {
			swAlert({
				title: "The fields must not be empty",
				icon: "warning",
			});
			return;
		}

		if (email !== "" && !regexEmail.test(email)) {
			swAlert({
				title: "You should type a valid email",
				icon: "warning",
			});
			return;
		}

		if (email !== "challenge@alkemy.org" || password !== "react") {
			swAlert({
				title: "invalid credentials",
				icon: "error",
			});
		}

		if (email === "challenge@alkemy.org" && password === "react") {
			swAlert({
				title: "Okey, you are ready",
				icon: "success",
			});

			const tokenInbound = "ee3b9a9d-fa82-4b15-952b-743ab988386b";
			sessionStorage.setItem("token", tokenInbound);

			navigate("/list");
		}
	};

	// if the user is already loged, then
	const token = sessionStorage.getItem("token");

	return (
		<>
			{token && <Navigate to="/list" />}

			<div className=" container-form mt-5">
				<div className="content-wrap">
					<h2 className="text-center mb-3">Formulario Login</h2>
					<form onSubmit={submitHandler}>
						<div className="mb-3">
							<label className="form-label">Correo Electronico:</label>
							<input type="email" className="form-control" id="email" />
						</div>

						<div className="mb-3">
							<label className="form-label">Contraseña:</label>
							<input type="password" className="form-control" id="password" />
						</div>

						<button type="submit" className="btn btn-success">
							Ingresar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
