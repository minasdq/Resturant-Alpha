import React from "react"
import { useParams } from "react-router-dom"
import FoodDetails from '../../../Layout/FoodDetails/FoodDetails'
import { useFoodPost } from "../../../../Hooks"


const FoodRecipes = (props) => {
  const history = useParams()
  const { data, isLoading, isError } = useFoodPost(history.id)
  const loadData=()=>{
    if (isLoading || isError) {
      console.log("spinner");
      return <div></div>
    }
    else{
      return <FoodDetails food={data}/>
      
      
    }
  }
  return <div>{loadData()}</div>
}
export default FoodRecipes
