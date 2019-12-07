import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { Button } from './components/Button';
import MenuandCart from './components/MenuandCart';

const ChickenCheeseBurger = require("./assets/chickenCheeseBurger.jpeg")
const PannerCheeseBurger = require("./assets/paneerCheeseBurger.jpeg")
const MargheritaPizza = require("./assets/margheritaPizza.jpeg")
const FarmHousePizza = require("./assets/farmhousePizza.jpeg")
const CheeseNachos = require("./assets/cheeseNachos.jpeg")
const VirginMojito = require("./assets/virginMojito.jpeg")

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        foodItems: [{
            image: <img src={PannerCheeseBurger} width="60px" height="60px"/>,
            name:"Paneer Cheese Burger",
            price: 249,
        },{
            image:  <img src={ChickenCheeseBurger} width="60px" height="60px"/>,
            name:"Chicken Cheese Burger",
            price: 299,
        },{
            image: <img src={MargheritaPizza} width="60px" height="60px"/>,
            name:"Margherita Pizza",
            price: 379,
        },{
            image: <img src={FarmHousePizza} width="60px" height="60px"/>,
            name:"Farm House Pizza",
            price: 399,
        },{
            image: <img src={CheeseNachos} width="60px" height="60px"/>,
            name:"Cheese Nachos",
            price: 229,
        },{
          image: <img src={VirginMojito} width="60px" height="60px"/>,
          name:"Virgin Mojito",
          price: 199,
      }
    ]
    }
}
  render(){
    const { foodItems } = this.state;
  return (
    <div className="App">
      <div className="main">
      <header className="App-header">  
      <Navbar/>      
      </header>
      <div className="blank"></div>
      <div className="body1">
          <h1 style={{    "color": "black", "font-size": "50px"}}>Have no time <br/>to prepare <a style={{"color":"coral"}}>food</a>?</h1>
          <p style={{"color": "black", opacity: ".6", "font-size": "20px", "font-weight": "700"}}>Choose one of our plans, enter delivery time <br/>and enjoy delicious food without leaving your home !!</p>
          <div style={{display: "flex", justifyContent: "center", fontWeight: "400", fontSize: "25px"}}><Button title="Order Food" style={{padding:"4px"}}/></div>
          <div className="icons">
            <i class="fa fa-twitter" aria-hidden="true" style={{"font-size": "30px", "cursor":"pointer", "color": "deepskyblue", "margin-right": "60px"}}></i>
            <i class="fa fa-youtube-play" aria-hidden="true" style={{"font-size": "28px", "color": "red","cursor":"pointer", "margin-right": "60px"}}></i>
            <i class="fa fa-instagram" aria-hidden="true" style={{"font-size": "28px", "color": "black","cursor":"pointer"}}></i>            
          </div>
      </div>
      <div className="footer">
      <a href="#body2"><i class="fa fa-angle-double-down fa-spin" style={{"font-size": "35px", "cursor":"pointer", "color":"white"}} aria-hidden="true"></i></a>
      </div>
      </div>
      <div className="body2" id="body2">
        <div className="blank1"></div>
        <div className="order-screen">
          <MenuandCart foodItems={foodItems}/>          
        </div>
      </div>      
    </div>
  )
}
}
export default App;
