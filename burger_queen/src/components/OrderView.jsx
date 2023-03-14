import { Link } from 'react-router-dom';
import { Button, List } from 'antd';
import Logo from './Logo'





const OrderView = (props) => {

    return (
        <div>
            <Logo></Logo>
            <Link to="/waiter" className='new-order'> Agregar una orden</Link>
            <Link to="/waiter" className='edit-order'> Editar una orden</Link>
            <Link to="/waiter" className='login-btn'> Ordenes listas</Link>
        </div>
    );
}

export default OrderView
