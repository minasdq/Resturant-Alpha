import {useAllFoodPosts} from '../../../Hooks'
import Spinner from '../Spinner/Spinner'
const FoodPosts=()=>{
    const {data,isLoading} =useAllFoodPosts()
    if (isLoading){
        // return <Spinner />
        console.log("is loading");
        return <div>isLoading</div>
    }
    else{
        console.log(data);
        return (<div />)
    }
}
export default FoodPosts
