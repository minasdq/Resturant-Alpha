import React from "react"
import Header from "../../Layout/Header/Header"
import About from "../../Layout/About/About"
import Team from "../../Layout/Team/Team"
import BookForm from "../../Layout/BookForm/BookForm"
import Gallery from "../../Layout/Gallery/Gallery"
import CommentSlider from "../../Layout/CommentSlider/CommentSlider"
const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <CommentSlider />
      <Team />
      <Gallery />
      <BookForm />
    </React.Fragment>
  )
}

export default HomePage
