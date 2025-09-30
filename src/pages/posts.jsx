import { CreatePost } from "../components/CreatePost";
import { PostContent } from "../components/PostContent";
import { Header } from "../components/header";

const Posts = () =>{
    
    return(
        <div>
            <Header />
            <CreatePost />
            <PostContent />
        </div>
  )
}
export default Posts;