import React from 'react'
import {Link} from 'react-router-dom'

import './Button.scss'
const Button=(props)=>{
    return (
        <button className="button" {...props}>
            <Link to={props.path} target="_blank" rel="noopener noreferrer">{props.children}</Link>
        </button>
    )
}
export default Button
Button.defaultProps={
    path:'/'
}