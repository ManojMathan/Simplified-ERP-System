import React, { useState } from 'react';
import OrderItem from './OrderItem';
import OrderForm from './OrderForm';
import mockOrders from '../mockData/orders';
import './Orders.css'; 

function Orders() {
    const [orders, setOrders] = useState(mockOrders);

    // Function to add a new order
    const addOrder = (newOrder) => {
        setOrders([...orders, newOrder]);
    };

    // Function to edit an order
    const editOrder = (orderId, updatedOrder) => {
        const updatedOrders = orders.map(order => {
            if (order.id === orderId) {
                return { ...order, ...updatedOrder };
            }
            return order;
        });
        setOrders(updatedOrders);
    };

    // Function to delete an order
    const deleteOrder = (orderId) => {
        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders);
    };

    return (
        <div className="orders-container">
            <h1 className="orders-heading">Orders Management</h1>
            <OrderForm addOrder={addOrder} />
            <div className="order-tiles">
                {orders.map(order => (
                    <div key={order.id} className="order-tile">
                        <OrderItem
                            order={order}
                            editOrder={editOrder}
                            deleteOrder={deleteOrder}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;
