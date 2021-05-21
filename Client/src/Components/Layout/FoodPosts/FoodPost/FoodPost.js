import React from "react"

const FoodPost = ({ post }) => {
  console.log(post.imgThumb);
  return (
    <div>
      <img src={post.imgThumb} />
      <h4>{post.title}</h4>
    </div>
  )
}
export default FoodPost
