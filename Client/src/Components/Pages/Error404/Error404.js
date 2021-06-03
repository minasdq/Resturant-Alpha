import React from "react"
import Gif from "../../../img/chef-gif.gif"
import "./Error404.scss"
const Error404 = () => {
    const goBack=()=>{
        window.history.back()
    }
  return (
    <div className="error404">
      <div className="text">
        <h2>Oops...!</h2>
        <p>
          Page Not Found. We are terribly sorry, but the URL you typed no longer
          exists. It might have been moved or deleted, or perhaps you mistyped
          it
        </p>
        <button onClick={goBack}>Go Back</button>
      </div>
      <div className="img-container">
        <img src={Gif} alt="chef" />
      </div>
    </div>
  )
}
export default Error404
