import {useAllFoodPosts} from '../../../Hooks'
import FoodPost from './FoodPost/FoodPost'
import Spinner from '../Spinner/Spinner'
const FoodPosts=()=>{
    const {data:posts,isLoading} =useAllFoodPosts()
    if (isLoading){
        // return <Spinner />
        console.log("is loading");
        return <div>isLoading</div>
    }
    
    else{
      console.log(posts);
       const showPosts=()=>{
        return posts.map((post)=>{
            return <FoodPost post={post} />
        })
       }
     
       
        return (<div >{showPosts()}</div>)
    }
    
}
export default FoodPosts
