import PropTypes from 'prop-types';

const getSaludo = (a, b) => {
    return a + b;
}


const Login = () => {
    return (
        <>
            <input type="email" className='Email-login-form-input" placeholder="yomellamo@laramada.com' required />
            <input type="password" className='password-email-login-form-input"' placeholder="******" required />
        </>
    );

}
export default Login

FirstApp.propTypes = {

}











//PROPS: Son las propiedades que le estamos mandando a la función, son objetos que  pueden tener
//mucha información dependiendo del concepto, se pasan desestructurados.
//primer componente
//Impresión de variables en el HTML
//Sí no existe ninguna dependencia del componente , lo ideal sería que se creen las funciones fueras de los componentes.
// a menos que se deban renderizar