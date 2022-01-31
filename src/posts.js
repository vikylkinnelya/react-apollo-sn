import { useQuery } from "@apollo/react-hooks"
import { GET_POSTS } from "./graphql/query"
import Post from './post'

const Posts = ({ data, refetch, fetchMore, setLimit }) => {

    const onLoadMore = () => {
        fetchMore({
            variables: {
                cursor: data.posts.after
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {

                if (!fetchMoreResult) return prevResult

                const prevRes = prevResult.posts.data
                const nextRes = fetchMoreResult.posts.data
                console.log(prevRes)

                fetchMoreResult.posts.data = [...prevRes, ...nextRes]

                return { ...fetchMoreResult }

            }

        })
    }

    return (
        <>
            <h1>Posts:</h1>
            <label htmlFor="limits">Limit for post feed </label>
            <select defaultValue={5} name="limits" id="limits" onChange={ev => setLimit(+ev.target.value)}>
                <option value='null'></option>
                <option value="5" >5</option>
                <option value="10" >10</option>
                <option value="20" >20</option>
                <option value="30" >30</option>
                <option value="40" >40</option>
            </select>

            <div className="posts-feed">


                {
                    data != null && data.posts.data.map(post => (
                        <Post
                            key={post._id}
                            post={post}
                            refetch={refetch} />
                    ))
                }
            </div>

            <button onClick={() => onLoadMore()}>
                load more
            </button>
        </>
    )
}

export default Posts