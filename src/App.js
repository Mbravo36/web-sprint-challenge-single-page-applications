import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Form from "./PizzaForm";
import Home from "./home";


const App = () => {
  return (
    <div className="header">
      <h1>Pizza Eats</h1>
      
      <nav>
      <Link to="/"><button id="home-button">Home</button></Link>
      <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
      </nav>
      <Switch> <Route path="/pizza" component={Form} />
        <Route path="/" component={Home} />
        </Switch>
        </div>
          );
        };
        export default App;
