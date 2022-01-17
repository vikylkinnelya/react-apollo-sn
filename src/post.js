import { DELETE_POST } from "./graphql/query"
import { useMutation } from "@apollo/react-hooks"

const Post = ({ post, refetch }) => {

    let { title, body, _ts, _id } = post


    const date = new Date(_ts / 1000).toLocaleString('en', {
        day: 'numeric',
        month: 'short'
    })

    const [deletePost] = useMutation(DELETE_POST, {
        variables: { "id": _id },
        onCompleted: () => refetch()
    })

    const onDeletePost = (id) => {
        window.confirm('are you sure to delete this post?') &&
            deletePost({ variables: id })
    }

    return (

        <div className="feed-post">
            <h1>{title}</h1>
            <p>{body}</p>
            <p>Created at: {date}</p>
            <button onClick={() => onDeletePost(_id)}>delete</button>
        </div>

    )
}

export default Post