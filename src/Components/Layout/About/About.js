import React from "react"
import Title from "../../UI/Title/Title"
import Context from "../../UI/Context/Context"
import Imageabout2 from '../../../img/about2.jpg'
import Imageabout1 from '../../../img/about1.jpg'
import "./About.scss"
const content = {
    p_1:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    placerat vehicula mauris at tincidunt.Donec ut pulvinar purus. Etiam
    interdum, ipsum eget pharetra molestie, neque odio consequat justo,
    hendrerit pretium nunc ipsum at arcu.Curabitur convallis volutpat felis
    ut congue. Pellentesque rutrum urna quis dui aliquet, nec euismod ex
    lobortis.`,
    p_2:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean vitae
    enim neque. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas.`,
    title:`Who We Are`
}
const About = () => {
  return (
    <section id="about" className="about">
      <div class="container">
        <Title title="About us" subTitle="It's Good Mood Food" />
        <div class="content">
          <Context p_1={content.p_1} p_2={content.p_2} title={content.title}/>
          <div class="content-img">
            <img src={Imageabout2} alt="food photo" />
            <img src={Imageabout1} alt="food photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
