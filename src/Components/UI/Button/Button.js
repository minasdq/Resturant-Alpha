import React from 'react'
import {Link} from 'react-router-dom'
import './Button.scss'
const Button=({children,path})=>{
    return (
        <button className="button">
            <Link to={path} target="_blank" rel="noopener noreferrer">{children}</Link>
        </button>
    )
}
export default Button