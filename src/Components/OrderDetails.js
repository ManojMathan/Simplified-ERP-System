import React from 'react';

function OrderDetailsBox({ selectedDate, filteredOrders }) {
  return (
    <div className="order-details-box">
      <h2>Orders for {selectedDate.toLocaleDateString()}</h2>
      <ul>
        {filteredOrders.map(order => (
          <li key={order.id}>
            <span className="order-date">{order.orderDate}</span> - {order.customerName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderDetailsBox;
