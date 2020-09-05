import React, {Component} from 'react';
import './App.css';
import NavBar from "./Components/NavBar/index";
import SideNav from './Components/SideNav/SideNav';
import Footer from './Components/Footer/Footer';
import ImgSlider from './Components/ImagSlider/Slider';
import TopCategory from './Components/TopCategory/TopCategory';
import ProductsSlider from './Components/ProductsSlider/ProductsSlider';

class App extends Component {
  render(){
    
    
    return (
      <div className="App">
        <NavBar />
        <SideNav />
        <ImgSlider />
        <TopCategory />
        <ProductsSlider />
        <Footer />
      </div>
    );
  }
}

export default App;
