import { useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { CREATE_POST, GET_POSTS } from "./graphql/query";

const NewPost = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const [createPost, { loading, error }] = useMutation(CREATE_POST, {
        onCompleted: data => console.log('Data from mutation:', data),
        onError: error => console.log('error creating a post:', error),
        refetchQueries: [//массив запросов кот делаются после мутации
            { //один запрос один обьект
                query: GET_POSTS,
                variables: { limit: 99 }
            }
        ]
    })

    const onCreatePost = (ev) => {
        ev.preventDefault()
        createPost({ variables: { title, body } })
        document.getElementById('title-input').value = ''
        document.getElementById('body-input').value = ''

    }

    return (
        <div id="new-post">
            <h1>New Post</h1>
            <form onSubmit={onCreatePost} id='post-form'>
                <p>
                    <input
                        placeholder="Title"
                        maxLength={20}
                        onChange={ev => setTitle(ev.target.value)}
                        id='title-input' />
                </p>
                <p>
                    <textarea
                        rows="4" cols="60"
                        placeholder="Body"
                        maxLength={300}
                        onChange={ev => setBody(ev.target.value)}
                        id='body-input' />
                </p>
                <button disabled={loading} type='submit reset'>
                    submit
                </button>
                {error && <p>{error.message}</p>}
            </form>
        </div>
    )
}

export default NewPost