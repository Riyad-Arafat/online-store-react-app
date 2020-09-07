import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

/// Main Components
import NavBar from "./Components/NavBar/index";
import SideNav from './Components/SideNav/SideNav';
import Footer from './Components/Footer/Footer';

/// All Pages of site
import Home from './Pages/Home'
import CartPage from './Pages/CartPage';


class App extends Component {
  render(){
    
    
    return (
      <BrowserRouter>
        
        <div className="App">
          <NavBar />
          <SideNav />
          <Route exact path="/" component= {Home}/>
          <Route eact path="/shopping_cart" component= {CartPage} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
