import React, { Component } from 'react'
import { Button } from './Button'
import './navbar.scss'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="logo"><a style={{color:"white"}}>FOOD.</a><a style={{color:"coral"}}>LOGO</a></div>
                <div className="switches">
                    <a className="switch" style={{borderBottom: "3px solid coral"}}>About</a>
                    <a className="switch">Our Food</a>
                    <a className="switch">Plans</a>
                    <Button title="Contact Us"/>
                </div>
            </>
        )
    }
}
