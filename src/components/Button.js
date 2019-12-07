import React from 'react'
import './button.scss'

export const Button = (props) => {
    return (
        <div className="button" onClick={props.onClick} style={props.style}>
            {props.title}            
        </div>
    )
}
