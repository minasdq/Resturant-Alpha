import React from "react"
import './Gallery.scss'
import Title from "../../UI/Title/Title"
import Image1 from "../../../img/img-01.jpg"
import Image2 from "../../../img/img-02.jpg"
import Image3 from "../../../img/img-03.jpg"
import Image4 from "../../../img/img-05.jpg"
import Image5 from "../../../img/img-05.jpg"
import Image6 from "../../../img/img-06.jpg"

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container">
        <Title title="our gallery" subTitle="Faster Than You Can Imagin" />
        <div className="gallery-img">
          <img src={Image1} alt="food" />
          <img src={Image2} alt="food" />
          <img src={Image3} alt="food" />
          <img src={Image4} alt="food" />
          <img src={Image5} alt="food" />
          <img src={Image6} alt="food" />
        </div>
      </div>
    </section>
  )
}

export default Gallery
