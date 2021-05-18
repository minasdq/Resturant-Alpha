import React, { useRef } from "react"
import "./ScrollTop.scss"
const ScrollTop = () => {
  const scrollTopEl = useRef(null)
  window.addEventListener("scroll", () => {
    if (!scrollTopEl){
      return
    }
    if (window.scrollY > 90) {
      scrollTopEl.current.style.display = "block"
    } else {
      scrollTopEl.current.style.display = "none"
    }
  })
  const scrollToFirst=()=>{
    window.scrollTo({top:0 ,behavior:"smooth"})
  }
  return (
    <div id="scroll-container" title="Go Up" ref={scrollTopEl}>
        <div className="scroll" onClick={scrollToFirst}>
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
    </div>
  )
}

export default ScrollTop
