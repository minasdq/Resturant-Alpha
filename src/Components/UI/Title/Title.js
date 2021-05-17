import React from "react"
import "./Title.scss"
const Title = ({ children, title, subTitle }) => {
  return (
    <div className="title">
      <h2 className="header">{title}</h2>
      <h3 className="header">{subTitle}</h3>
    </div>
  )
}
export default Title
