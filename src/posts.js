import { useQuery } from "@apollo/react-hooks"
import { GET_POSTS } from "./graphql/query"
import Post from './post'

const Posts = () => {

    const { loading, data, refetch } = useQuery(GET_POSTS)
    
    loading && <div>loading...</div>


    return data.posts.map(post => (
        <Post
            key={post.id}
            post={post}
            refetch={refetch} />
    ))
}

export default Posts