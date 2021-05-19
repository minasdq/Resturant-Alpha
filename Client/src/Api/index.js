import axios from "axios"

const cleint = axios.create({
  baseURL: "http://localhost:3001",
})

const  getAllFoodPosts= async () => {
  const { data } = await cleint.get("/foodposts")
  return data
}
const getFoodPost = async (_, id) => {
  const { data } = await cleint.get(`/foodposts/${id}`)
  return data
}

export { getAllFoodPosts, 
         getFoodPost }
