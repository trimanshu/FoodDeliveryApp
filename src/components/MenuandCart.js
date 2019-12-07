import React, { Component } from 'react'
import './menuandcart.scss'

export default class MenuandCart extends Component {
    constructor(props){
        super(props)
        this.state={
            cartItems:[]
        }
    }
    handleSelect = (data) => {
        this.setState({
            cartItems: [...this.state.cartItems, data]
        })
    }

    handleRemove = data => {
        var list = [...this.state.cartItems]; 
        var index = list.indexOf(data)
        if (index !== -1) {
            list.splice(index, 1);
            this.setState({cartItems: list});
        }
    }

    orderTotal = (arr, type) => {
        return arr.reduce((total, obj) => {
            return total + obj[type];
          }, 0);
    }

    render() {
        const { foodItems } = this.props;
        const { cartItems } = this.state;
        return (
            <>
            <div className="menu">  
            <h3 style={{margin: "20px", fontSize: "28px", color: "coral", borderBottom:"2px solid lightgrey", paddingBottom:"15px"}}>Food - Menu</h3>   
            <div className="scroll">
            {
                foodItems && foodItems.map( items => {
                    return (
                        <div className="list" onClick={() => this.handleSelect(items)} >
                            <div >{items.image}</div>
                            <div className="item">{items.name}</div>
                            <div className="price">{items.price}</div>
                        </div>                             
                    )
                })
            }   
            </div>        
            </div>
            <div className="blnk"></div>
            <div className="cart">
            <h3 style={{margin: "20px", fontSize: "28px", color: "coral", borderBottom:"2px solid lightgrey", paddingBottom:"15px"}}>Food - Cart</h3>  
            <div className="scroll">
            {
                cartItems && cartItems.map( items => {
                    return (
                        <div className="list" onClick={() => this.handleRemove(items)} >
                            <div >{items.image}</div>
                            <div className="item">{items.name}</div>
                            <div className="price">{items.price}</div>
                        </div>                             
                    )
                })
            }               
            </div> 
            <div className="total">
                <h3>Total Amount</h3>
                <h3>{ cartItems ? "Rs." + this.orderTotal(cartItems, 'price') : `Rs. 0`}</h3>
            </div> 
            </div>              
            </>
        )
    }
}
