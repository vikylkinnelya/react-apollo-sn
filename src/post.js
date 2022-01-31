import { DELETE_POST, GET_USER } from "./graphql/query"
import { useMutation, useLazyQuery } from "@apollo/react-hooks"

const Post = ({ post, refetch }) => {

    let { title, body, _ts, _id, likes, comments } = post

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

            <p>
                <button>
                    &#9829;
                </button>
                <span>{likes.length}</span>

                <button>
                💬
                </button>
                <span>
                    {comments.length}
                </span>
            </p>

            <button onClick={() => onDeletePost(_id)}>delete</button>

        </div >

    )
}

export default Post