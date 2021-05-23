import React from "react"
import "./FoodDetails.scss"
import Title from "../../UI/Title/Title"
const FoodDetails = ({ food }) => {
  const showIngredients = () => {
    let ingredients = []
    for (let item in food.ingredient) {
      ingredients.push(
        <li>
          {item} <span className="dot">:</span> {food.ingredient[item]}{" "}
        </li>
      )
    }
    return ingredients
  }
  return (
    <div className="food__details">
      <Title title={food.title} subTitle="Cook and enjoy" />
      <div className="content">
        <div className="img__container">
          <img src={food.imgThumb} />
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul className="list__ingredients">{showIngredients()}</ul>
        </div>
      </div>
      <div className="recipe">
        
        <p> <span className="title">Recipe: </span>{food.recipes}</p>
      </div>
    </div>
  )
}
export default FoodDetails
