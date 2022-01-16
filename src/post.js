import { DELETE_POST } from "./graphql/query"
import { useMutation } from "@apollo/react-hooks"

const Post = ({ post, refetch }) => {

    const [deletePost] = useMutation(DELETE_POST, {
        onCompleted: () => refetch()
    })

    const onDeletePost = (id) => {
        window.confirm('are you sure to delete this post?') &&
            deletePost({ variables: id })
    }

    return (

        <div>
            <h1>{post.title}</h1>
            <p>{post.button}</p>
            <button onClick={() => onDeletePost(post.id)}>delete</button>
        </div>

    )
}

export default Post