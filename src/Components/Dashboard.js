import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Dashboard.css";

function Dashboard() {
  const availableStock = 547;
  const orders = 300;
  const totalProducts = 10; // Total number of products

  // Sample product data
  const products = [
    { name: "Laptop", orders: 20, stockQuantity: 100 },
    { name: "Smartphone", orders: 30, stockQuantity: 50 },
    { name: "Headphones", orders: 30, stockQuantity: 50 },
    { name: "Tablet", orders: 10, stockQuantity: 50 },
    { name: "Camera", orders: 30, stockQuantity: 70 },
    { name: "Printer", orders: 32, stockQuantity: 100 },
    { name: "Speaker", orders: 44, stockQuantity: 60 },
    { name: "Monitor", orders: 54, stockQuantity: 57 },
    { name: "Keyboard", orders: 20, stockQuantity: 90 },
    { name: "Mouse", orders: 30, stockQuantity: 220 }
  ];

  return (
    <div className="dashboard-container">
      <section className="hero">
        <h1>Welcome to ERP System</h1>
        <p className="dashboard-summary">
          A snapshot of essential metrics and features...
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Orders</th>
                <th>Stock Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.orders}</td>
                  <td>{product.stockQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary section */}
      <section className="summary">
        <Container>
          <Row>
            <Col>
              <h2>Summary</h2>
              <p>Total Number of Products: {totalProducts}</p>
              <p>Total Orders: {orders}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* Links for quick navigation */}
              <Button variant="primary" as={Link} to="/products">
                Manage Products
              </Button>{" "}
              <Button variant="primary" as={Link} to="/orders">
                Manage Orders
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Dashboard;
