import PropTypes from 'prop-types';
//Impresión de variables en el HTML
//Sí no existe ninguna dependencia del componente , lo ideal sería que se creen las funciones fueras de los componentes.
// a menos que se deban renderizar
const getSaludo = (a, b) => {
    return a + b;
}
//PROPS: Son las propiedades que le estamos mandando a la función, son objetos que  pueden tener
//mucha información dependiendo del concepto, se pasan desestructurados.
//primer componente

export const FirstApp = ({ title, subTitle }) => {
    return (
        <>
            <input type="email" class="Email-login-form-input" id="EmailLoginFormInput" placeholder="yomellamo@laramada.com" required />
            <input type="password" class="password-email-login-form-input" id="passwordEmailLoginInput" placeholder="******" required />
        </>
    );

}

FirstApp.propTypes = {

}




