import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/index";
import SideNav from './Components/SideNav/SideNav';
import Footer from './Components/Footer/Footer';
import ImgSlider from './Components/ImagSlider/Slider';
import TopCategory from './Components/TopCategory/TopCategory';
import ProductsSlider from './Components/ProductsSlider/ProductsSlider';
import Cart from './Components/Cart/Cart';


class App extends Component {
  render(){
    
    
    return (
      <BrowserRouter>
        
        <div className="App">
          <NavBar />
          <SideNav />
          <Route exact path="/" component= {ImgSlider}/>
          <Route exact path="/" component= {TopCategory} />
          <Route exact path="/" component= {ProductsSlider} />
          <Route eact path="/shopping_cart" component= {Cart} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
