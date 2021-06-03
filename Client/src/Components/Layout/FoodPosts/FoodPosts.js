import { useAllFoodPosts } from "../../../Hooks"
import FoodPost from "./FoodPost/FoodPost"
import Title from "../../UI/Title/Title"
import Spinner from "../Spinner/Spinner"
import "./FoodPosts.scss"
const FoodPosts = () => {
  const { data: posts, isLoading,isError } = useAllFoodPosts()
  const showPosts = () => {
    if (isLoading || isError) {
      return <Spinner />
     
    } else {
      return posts.map((post) => {
        return <FoodPost post={post} key={post.id} />
      })
    }
  }

  return (
    <div className="food__posts">
      <div className="header__container">
        <Title title="List Food" subTitle="Exprerience for Yourself" />
      </div>
      <div className="list">{showPosts()}</div>
    </div>
  )
}
export default FoodPosts
