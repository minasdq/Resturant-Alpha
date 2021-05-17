import React from "react"
import Header from "../../Layout/Header/Header"
import About from "../../Layout/About/About"
import Team from "../../Layout/Team/Team"
import BookForm from "../../Layout/BookForm/BookForm"
import Gallery from "../../Layout/Gallery/Gallery"
const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Team />
      <Gallery />
      <BookForm />
    </React.Fragment>
  )
}

export default HomePage
