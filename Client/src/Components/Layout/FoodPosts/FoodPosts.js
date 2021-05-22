import { useAllFoodPosts } from "../../../Hooks"
import FoodPost from "./FoodPost/FoodPost"
import Title from "../../UI/Title/Title"
import Spinner from "../Spinner/Spinner"
import "./FoodPosts.scss"
const FoodPosts = () => {
  const { data: posts, isLoading } = useAllFoodPosts()
  const showPosts = () => {
    if (isLoading) {
      // return <Spinner />
      return <div>isLoading</div>
    } else {
      console.log(posts)
      return posts.map((post) => {
        return <FoodPost post={post} />
      })
    }
  }

  return (
    <div className="food__posts">
      <div className="header">
        <Title title="List Food" subTitle="Exprerience for Yourself" />
      </div>
      <div className="list">{showPosts()}</div>
    </div>
  )
}
export default FoodPosts
