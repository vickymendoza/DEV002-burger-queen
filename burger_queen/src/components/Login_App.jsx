import { Link } from 'react-router-dom';
import Logo from './Logo'
import { useState } from "react";




const Login = (props) => {
    const [] = useState(0)
    return (
        <div>
            <Logo></Logo>
            <form>
                <input className='Email-login-form-input' placeholder="yomellamo@laramada.com" required />
                <input className='password-email-login-form-input' placeholder="******" required />
                <Link to="/orderview" className='login-btn'> INICIAR SESION</Link>
            </form>
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