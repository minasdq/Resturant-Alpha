import React from "react"
import './FoodPost.scss'
const FoodPost = ({ post }) => {
  console.log(post.imgThumb);
  return (
    <div className="food__post">
      <img src={post.imgThumb} />
      <h4>{post.title}</h4>
    </div>
  )
}
export default FoodPost
