import * as api from "../Api"
import { useQuery } from "react-query"

const useAllFoodPosts = () => {
  return useQuery("foodPosts",api.getAllFoodPosts,{
    refetchOnWindowFocus:false,
    
  })
}
const useFoodPost = (id) => {
  
    return useQuery(["foodPost",id],api.getFoodPost,{
      refetchOnWindowFocus:false,
      refetchInterval:false
    })
  }
export {useAllFoodPosts,useFoodPost}