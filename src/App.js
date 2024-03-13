import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Products from './Components/Product';
import Orders from './Components/Order';
import CalendarPage from './Components/CalendarPage'; // Import CalendarPage
import './App.css'; 

function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar">
                    <Link to="/" className="nav-link">Dashboard<span className="nav-description"> - Overview</span></Link>
                    <Link to="/products" className="nav-link">Products<span className="nav-description"> - View Products</span></Link>
                    <Link to="/orders" className="nav-link">Orders<span className="nav-description"> - View Orders</span></Link>
                    <Link to="/calendar" className="nav-link">Calendar<span className="nav-description"> - View Calendar</span></Link>
                </nav>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/products" component={Products} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/calendar" component={CalendarPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
