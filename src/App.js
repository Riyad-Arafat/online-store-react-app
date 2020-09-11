import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

/// Main Components
import NavBar from "./Components/NavBar/index";
import SideNav from './Components/SideNav/SideNav';
import Footer from './Components/Footer/Footer';

/// All Pages of site
import Home from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import ProductDetails from './Pages/ProductDetails';
import Section from './Pages/Section';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <SideNav />
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route path="/shopping_cart" component= {CartPage} />
            <Route path="/product/:item_id" component= {ProductDetails} neam="dsad" />
            <Route path="/section/:section" component= {Section} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
