import React from 'react'
import {useFoodPost} from '../../../Hooks'
const RecipesFood=({id})=>{
    const {data,isLoading}=useFoodPost(id)
    return (<div></div>)
}
export default RecipesFood