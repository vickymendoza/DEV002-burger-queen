import { useState } from 'react';
import { Button, List } from 'antd';
import '../index.css'
import Logo from './Logo.jsx'

function Waiter() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const handleAddItem = (item) => {
        setItems([...items, item]);
        setTotal(total + item.price);
    };
    const handleRemoveItem = (item) => {
        const index = items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            setItems([...items.slice(0, index), ...items.slice(index + 1)]);
            setTotal(total - item.price);
        }
    };
    const menuItems = [
        { id: 1, name: 'Sancocho de gallina', price: 18000 },
        { id: 2, name: 'Marranitas', price: 12000 },
        { id: 3, name: 'Empanadas', price: 2500 },
        { id: 4, name: 'Arroz atollado', price: 23000 },
        { id: 5, name: 'Tamal valluno', price: 15000 },
        { id: 6, name: 'Papa aborrajada', price: 5000 },
        { id: 7, name: 'Champús', price: 7000 },
        { id: 8, name: 'Gaseosa', price: 7000 },
        { id: 9, name: 'Salpicón', price: 7000 },
        { id: 10, name: 'Lulada', price: 7000 },

    ];
    return (

        <div className="container">

            <div className="menu">
                <Logo></Logo>
                <h2>Mesa 3</h2>
                <List
                    dataSource={menuItems}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <span>{item.name} - ${item.price}</span>
                            <Button onClick={() => handleAddItem(item)}>Agregar</Button>
                        </List.Item>
                    )}
                />
            </div>
            <div className="order-summary">
                <h2>Resumen de pedido</h2>
                <List
                    dataSource={items}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <span>{item.name} - ${item.price}</span>
                            <Button onClick={() => handleRemoveItem(item)}>Quitar</Button>
                        </List.Item>
                    )}
                />
                <p>Total: ${total}</p>

                <Button onClick={() => (item)}>Enviar a cocina</Button>
            </div>
        </div>
    );

}
export default Waiter