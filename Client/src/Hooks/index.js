import * as api from "../Api"
import { useQuery } from "react-query"

const useAllFoodPosts = () => {
  return useQuery("foodPosts",api.getAllFoodPosts)
}
const useFoodPost = (id) => {
    return useQuery(["foodPost",id],api.getFoodPost)
  }
export {useAllFoodPosts,useFoodPost}