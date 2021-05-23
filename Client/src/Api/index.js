import axios from "axios"

const cleint = axios.create({
  baseURL: "http://localhost:3001",
})

const  getAllFoodPosts= async () => {
  const { data } = await cleint.get("/foodposts")
  return data
}
const getFoodPost = async (props) => {
  const { data } = await cleint.get(`/foodposts/${props.queryKey[1]}`)
  return data
}

export { getAllFoodPosts, 
         getFoodPost }
