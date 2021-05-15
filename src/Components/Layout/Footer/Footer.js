import React from "react"
import { Link } from "react-router-dom"
import "./Footer.scss"
import ScrollTop from "../ScrollTop/ScrollTop"
const Footer = () => {
  const getDate = () => {
    return `${new Date().getFullYear()} `
  }
  return (
    <React.Fragment>
        <ScrollTop />
      <footer id="footer" className="footer">
        <svg
          className="defs-only"
          xmlnsXlink="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <symbol id="wave">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none">
              <g>
                <path
                  d="M100,30 Q70,40 50,30 T0,30 v20 h100Z"
                  style={{
                    fill: "#1b1d1c",
                    strokeLinejoin: "round",
                    stroke: "#ffffff",
                  }}
                  strokeWidth="0"
                />
              </g>
            </svg>
          </symbol>
        </svg>
        <svg width="50" height="50" style={{ width: "100%", height: "200px" }}>
          <use xlinkHref="#wave" />
        </svg>
        <div className="footer-container">
          <div className="text">
            <div className="about">
              <h5>about</h5>
              <p>
                Objectively innovate empowered manufactured products whereas
                parallel platforms. Holisticly predominate extensible testing
                procedures for reliable supply chains. Dramatically engage
                top-line web services vis-a-vis cutting-edge deliverables
              </p>
            </div>
            <div className="contact">
              <h5>Contact</h5>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-telegram"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-facebook"></i>
              </Link>
            </div>
          </div>
          <div id="right">&copy;{getDate()}Alpha. All rights reserved</div>
        </div>
      </footer>
    </React.Fragment>
  )
}
export default Footer
