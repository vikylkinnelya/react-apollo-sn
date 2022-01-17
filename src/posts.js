import { useQuery } from "@apollo/react-hooks"
import { GET_POSTS } from "./graphql/query"
import Post from './post'

const Posts = ({data, refetch}) => {

    return (
        <div className="posts-feed">
            {
                data != null  && data.allPosts.data.map(post => (
                    <Post
                        key={post._id}
                        post={post}
                        refetch={refetch} />
                ))
            }
        </div>
    )
}

export default Posts