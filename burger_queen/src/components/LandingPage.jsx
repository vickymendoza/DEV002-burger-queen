import { Link } from 'react-router-dom';
import Logo from './Logo'

function LandingPage() {

    return (
        <div>
            <Logo></Logo>
            <Link to="/login" className="email-login-div-btn">INICIAR SESION</Link>
            <p className="email-login-forget-psw" >RECUPERAR CONTRASEÑA
                <Link to="/login" className="email-login-click-div-btn"> Click aquí </Link>
            </p>
        </div>


    )

}

export default LandingPage