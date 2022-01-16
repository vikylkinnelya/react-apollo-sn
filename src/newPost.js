import { useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { CREATE_POST } from "./graphql/query";
import { useMutation } from "@apollo/react-hooks"

export default NewPost = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [createPost, { loading, error }] = useMutation(CREATE_POST, {
        onCompleted: data => console.log('Data from mutation:', data),
        onError: error => console.log('error creating a post:', error),
        refetchQueries: [//массив запросов кот делаются после мутации
            { //один запрос один обьект
            query: GET_POSTS,
            variables: {limit:5}
        }
    ]
    })

    const onCreatePost = (ev) => {
        ev.preventDefault()
        createPost({ variables: { title, body } })
    }

    return (
        <div>
            <h1>New Post</h1>
            <form onSubmit={onCreatePost}>
                <input onChange={ev => setTitle(ev.target.value)} />
                <textarea onChange={ev => setBody(ev.target.value)} />
                <button disabled={loading} type='submit'>
                    submit
                </button>
                {error && <p>{error.message}</p>}
            </form>
        </div>
    )

}