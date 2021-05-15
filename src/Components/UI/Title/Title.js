import React from "react"
import "./Title.scss"
const Title = ({ children, title, subTitle }) => {
  return (
    <div className="title">
      <h2 class="header">{title}</h2>
      <h3 class="header">{subTitle}</h3>
    </div>
  )
}
export default Title
