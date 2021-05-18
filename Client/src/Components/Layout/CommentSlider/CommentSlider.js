import React from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import "./CommentSlider.scss"
const comments = [
  {
    message: `Duis eros dolor, cursus et quam ut, mattis sagittis lectus. Nunc gravida id ligula id faucibus.
        Aenean fermentum auctor urna, ut semper mauris tempus quis. Aenean non justo erat. Mauris dapibus
        aliquam metus, consequat blandit nulla congue.`,
    author: `James Smith`,
  },
  {
    message: `sit amet consectetur adipisicing elit. Rerum nihil placeat inventore fugiat, repellendus nam a. Iste
        inventore quasi excepturi fugit corporis commodi a temporibus velit iusto incidunt? Cumque, error.`,
    author: `Monika Smith`,
  },
  {
    message: `Aenean non justo erat. Mauris dapibus aliquam metus, consequat blandit nulla congue. Lorem ipsum
        dolor sit amet consectetur adipisicing elit.`,
    author: `Rolf Doblli`,
  },
]

const CommentSlider = () => {
  const sliderItems = comments.map((comment,index) => {
    return (
      <div className="item msg" key={index}>
        <p>
          <i className="fas fa-quote-left"></i>
          {comment.message}
          <i className="fas fa-quote-right"></i>
        </p>
        <h4>{comment.author}</h4>
      </div>
    )
  })
  return (
    <section id="comment-slider" className="comment-slider">
      <div className="dark-overlay"></div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        autoplay
        autoplayTimeout={7000}
        responsive={{ 0: { items: 1 } }}
      >
        {sliderItems}
      </OwlCarousel>
    </section>
  )
}
export default CommentSlider
