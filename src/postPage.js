import { useSubscription } from "@apollo/react-hooks";
import { GET_POST } from "./graphql/query";

// where id comes from route params -> /post/:id
export default PostPage = ({ id }) => {

    const { loading, error, data } = useSubscription(GET_POST, {
        variables: { id }
        //shouldReSubscribe: true //default: false //позволяет переподписаться несли пропсы изменятся
        //onSubscriptionData: data => console.log('new data:', data) //позвол вызвать функцию в любой момент когда хук получит новые данные
        //fetchPolicy: 'network-only' //default: 'cache-first')
    })

    loading && <div>loading...</div>
    error && <div>error!</div>

    const post = data.posts[0]

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}