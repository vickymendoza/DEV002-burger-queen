import { Link } from 'react-router-dom';
import Logo from './Logo'
import { useState } from "react";



const Login = (props) => {
    console.log(props);

    return (
        <div>
            <Logo></Logo>
            <input className='Email-login-form-input' placeholder="yomellamo@laramada.com" required />
            <input className='password-email-login-form-input' placeholder="******" required />
            <Link to="/waiter" className='login-btn'> INICIAR SESION</Link>
        </div>
    );
}

export default Login












//PROPS: Son las propiedades que le estamos mandando a la función, son objetos que  pueden tener
//mucha información dependiendo del concepto, se pasan desestructurados.
//primer componente
//Impresión de variables en el HTML
//Sí no existe ninguna dependencia del componente , lo ideal sería que se creen las funciones fueras de los componentes.
// a menos que se deban renderizar