import React from 'react'
import {useFoodPost} from '../../../../Hooks'
const FoodPost=({id})=>{
    const {data,isLoading}=useFoodPost(id)
    return (<di></di>)
}
export default FoodPost