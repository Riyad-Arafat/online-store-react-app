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
import SearchPage from './Pages/Search';
import NotFound from './Pages/NotFoundPage';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <SideNav />
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/shopping_cart" component= {CartPage} />
            <Route exact path="/product/:item_id" component= {ProductDetails} neam="dsad" />
            <Route exact path="/section/:section" component= {Section} />
            <Route exact path="/search/q=:q" component= {SearchPage} />
            <Route exact path="/search/q=:q/price/min=:min/max=:max" component= {SearchPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
