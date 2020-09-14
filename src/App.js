import React, {Component} from 'react';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
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
import {createHashHistory} from 'history'

const h = createHashHistory(); 

class App extends Component {
  render(){
    return (
      <Router history={h}>
        <div className="App">
          <NavBar />
          <SideNav />
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route path="/shopping_cart" component= {CartPage} />
            <Route path="/product/:item_id" component= {ProductDetails} neam="dsad" />
            <Route path="/section/:section" component= {Section} />
            <Route exact path="/search/q=:q" component= {SearchPage} />
            <Route path="/search/q=:q/price/min=:min/max=:max" component= {SearchPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
