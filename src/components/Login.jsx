import React from "react";
import { useState } from "react";

const Login = ({datos}) => {
    const handleInputChange = (event) => {
        datos[1]({
            ...datos[0],
            [event.target.name]: event.target.value
        })
    }
    const [error, setError] = useState(false);
    //Función antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();
        //Validación;
        if (datos[0].name === '' || datos[0].password === '') {
            setError(true);
            return;
        }
        setError(false);
        datos[1]({
            name: "",
            password: ""
        });

    }

        return (
            <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">

                    <form className="mb-md-5 mt-md-4 pb-5" onSubmit={validarDatos}>

                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <div className="form-outline form-white mb-4">
                            <input name="name" type="name" className="form-control form-control-lg" value={datos[0].nombre} onChange={handleInputChange} />
                            <label className="form-label" for="typeEmailX">Name</label>
                        </div>

                        <div className="form-outline form-white mb-4">
                            <input name="password" type="password" className="form-control form-control-lg" value={datos[0].password} onChange={handleInputChange} />
                            <label className="form-label" for="typePasswordX">Password</label>
                        </div>
                        {error ? <p style={{color:'red'}}> * Todos los campos son obligatorios</p> : null}
                        {datos[0].password === '252525' ? (<button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                        ) : <button className="btn btn-outline-light btn-lg px-5" type="submit"hidden>Login</button>}
                    </form>

                </div>
            </div>

        )
    };
export default Login;