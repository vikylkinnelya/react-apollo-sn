import { useQuery } from "@apollo/react-hooks"
import { GET_POSTS } from "./graphql/query"
import Post from './post'

const Posts = ({ data, refetch, fetchMore, setLimit }) => {

    const onLoadMore = () => {
        fetchMore({
            variables: {
                cursor: data.allPosts.after
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {

                if (!fetchMoreResult) return prevResult

                const prevRes = prevResult.allPosts.data
                const nextRes = fetchMoreResult.allPosts.data
                console.log(prevRes)

                fetchMoreResult.allPosts.data = [...prevRes, ...nextRes]

                return { ...fetchMoreResult }

            }

        })
    }

    return (
        <>
            <h1>Posts:</h1>
            <label htmlFor="limits">Limit for post feed </label>
            <select defaultValue={10} name="limits" id="limits" onChange={ev => setLimit(+ev.target.value)}>
                <option ></option>
                <option value="5" >5</option>
                <option value="10" >10</option>
                <option value="20" >20</option>
                <option value="30" >30</option>
                <option value="40" >40</option>
            </select>

            <div className="posts-feed">


                {
                    data != null && data.allPosts.data.map(post => (
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