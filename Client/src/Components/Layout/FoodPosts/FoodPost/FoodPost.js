import React from "react"
import { Link } from "react-router-dom"
import "./FoodPost.scss"
const FoodPost = ({ post }) => {
  return (
    <div className="food__post">
      <Link to={`/ListFoods/${post.id}`}>
        <img src={post.imgThumb} alt={post.title} />
        <h4>{post.title}</h4>
      </Link>
    </div>
  )
}
export default FoodPost
