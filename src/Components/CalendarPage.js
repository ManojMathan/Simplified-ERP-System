import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import react-calendar component
import './CalendarPage.css'; // Import the CSS file

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to store selected date
  const [filteredOrders, setFilteredOrders] = useState([]); // State to store filtered orders

  // Mock data for orders with expected delivery dates
  const mockOrders = [
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2024-03-07',
      status: 'Shipped'
    },
    {
      id: 2,
      orderId: 'ORD002',
      customerName: 'Alice Smith',
      orderDate: '2024-03-08',
      status: 'Pending'
    },
    {
      id: 3,
      orderId: 'ORD003',
      customerName: 'Bob Johnson',
      orderDate: '2024-03-09',
      status: 'Delivered'
    },
    {
      id: 4,
      orderId: 'ORD004',
      customerName: 'Emily Brown',
      orderDate: '2024-03-10',
      status: 'Pending'
    },
    {
      id: 5,
      orderId: 'ORD005',
      customerName: 'Michael Wilson',
      orderDate: '2024-03-11',
      status: 'Delivered'
    },
    {
      id: 6,
      orderId: 'ORD006',
      customerName: 'Sophia Martinez',
      orderDate: '2024-03-12',
      status: 'Pending'
    },
    {
      id: 7,
      orderId: 'ORD007',
      customerName: 'Daniel Lee',
      orderDate: '2024-03-13',
      status: 'Shipped'
    },
    {
      id: 8,
      orderId: 'ORD008',
      customerName: 'Olivia Davis',
      orderDate: '2024-03-14',
      status: 'Delivered'
    },
    {
      id: 9,
      orderId: 'ORD009',
      customerName: 'William Miller',
      orderDate: '2024-03-15',
      status: 'Pending'
    },
    {
      id: 10,
      orderId: 'ORD010',
      customerName: 'Ella Wilson',
      orderDate: '2024-03-16',
      status: 'Shipped'
    },
    {
      id: 11,
      orderId: 'ORD011',
      customerName: 'James Taylor',
      orderDate: '2024-03-17',
      status: 'Delivered'
    },
    {
      id: 12,
      orderId: 'ORD012',
      customerName: 'Emma Anderson',
      orderDate: '2024-03-18',
      status: 'Pending'
    }
 
  ];

  // Function to handle date clicks
  const handleDateClick = (date) => {
    // Adjust for time zone offset
    const adjustedDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    setSelectedDate(adjustedDate);

    // Filter orders for the selected date
    const formattedDate = adjustedDate.toISOString().split('T')[0];
    const filteredOrders = mockOrders.filter(order => order.orderDate === formattedDate);
    setFilteredOrders(filteredOrders);
  };

  return (
    <div className="calendar-page">
      <h1 className="calendar-heading">Orders Calendar Page</h1>
      <div className="calendar-container">
        {/* Render the react-calendar component */}
        <Calendar
          value={selectedDate}
          onChange={handleDateClick}
          locale="en-US"
        />
      </div>
      <div className="order-list">
        <h2>Orders for {selectedDate.toLocaleDateString()}</h2>
        <ul>
          {filteredOrders.map(order => (
            <li key={order.id}>
              <span className="order-date">{order.orderDate}</span> - {order.customerName}
            </li>
          ))}
        </ul>
      </div>
      {/* Box to display order details */}
      <div className="order-details-box">
        <h2>Order Details</h2>
        <ul>
          {filteredOrders.map(order => (
            <li key={order.id}>
              <span>Order ID: {order.orderId}</span><br />
              <span>Customer Name: {order.customerName}</span><br />
              <span>Status: {order.status}</span><br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalendarPage;
