import React from "react"
import Title from "../../UI/Title/Title"
import Context from "../../UI/Context/Context"
import chefImage from '../../../img/chef-img.png'
import "./Team.scss"
const content = {
    p_1:`Etiam eget felis sit amet nunc euismod laoreet. Nunc congue
    sollicitudin bibendum. Pellentesque ut sollicitudin erat. Proin in
    tincidunt nisl. Class aptent taciti sociosqu ad litora torquent per
    conubia nostra, per inceptos himenaeos. Cras posuere interdum est
    non malesuada. Ut quis aliquam ipsum. Phasellus viverra ipsum velit,
    in ultrices orci commodo ullamcorper. Ut laoreet vel mi eget
    fringilla.`,
    p_2:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    vitae enim neque. Pellentesque habitant morbi tristique senectus et
    netus et malesuada fames ac turpis egestas.`
}
const Team = () => {
  return (
    <section id="team" className="team"> 
      <div className="container">
        <div className="img-team">
          <img src={chefImage} alt="chef" />
        </div>
        <div className="text">
          <Title title="THE CHEFS" subTitle="The Best or Nothing" />
          <Context p_1={content.p_1} p_2={content.p_2} />
        </div>
      </div>
    </section>
  )
}
export default Team
