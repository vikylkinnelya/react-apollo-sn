import { useQuery } from "@apollo/react-hooks"
import { useState } from "react"
import { GET_POST, GET_POSTS, UPDATE_POST } from "./graphql/query"

//edit/:postId
export default EditPost = ({ id }) => {
    const { loading, data } = useQuery(GET_POST,
        { variables: { id } })

    const [title, setTitle] = useState(loading ? data?.posts[0].title : '')
    const [body, setBody] = useState(loading ? data?.posts[0].body : '')

    const [updatePost] = useMutation(UPDATE_POST, {
        onCompleted: () => history.push('/'),
        update: (cache, data) => {
            const { posts } = cache.readQuery(GET_POSTS)
            const newPost = data.update_posts.returning
            const updatedPosts = posts.map(post => post.id === id ? newPost : post)
            cache.writeQuery({query: GET_POSTS, data: {posts: updatedPosts}})
        }
    })

    const onUpdatePost = (ev) => {
        ev.preventDefault()
        updatePost({ variables: { title, body, id } })
    }

    return (

        <form onSubmit={onUpdatePost}>
            <input
                onChange={ev => setTitle(ev.target.value)}
                defaultValue={title}
            />
            <input
                onChange={ev => setBody(ev.target.value)}
                defaultValue={body}
            />
            <button type='submit'>
                submit
            </button>
        </form>

    )
}