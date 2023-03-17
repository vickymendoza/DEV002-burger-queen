import { Link } from 'react-router-dom';
import Logo from './Logo'

function LandingPage() {

    return (
        <div className="landing-page">
            <div className="Inicio-sesión">
                <Logo></Logo>
                <Link to="/login" className="login-btn-uno">Iniciar Sesión</Link>
            </div>

            <div className="recuperar-contraseña">
                <p className="email-login-forget-psw" >Recuperar contraseña
                    <Link to="/login" className="login-btn-dos"> Click aquí </Link>
                </p>
            </div>
        </div>


    )

}

export default LandingPage