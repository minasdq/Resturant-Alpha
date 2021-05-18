import React from "react"
import Button from "../Button/Button"
import './Context.scss'
const Context = ({ p_1, p_2,title }) => {
  return (
    <div className="context">
      <h4 className="title animation">{title}</h4>
      <p className="p-1 animation">{p_1}</p>
      <p className="p-2 animation">{p_2}</p>
      <Button path="/">BOOK A TABLE</Button>
    </div>
  )
}
export default Context
