import './App.css';
import { GET_POSTS, CREATE_POST, GET_POST } from './graphql/query'
import { useQuery } from '@apollo/react-hooks';
import Posts from './posts';
import NewPost from './newPost';

function App() {

  const { loading, data, refetch } = useQuery(GET_POSTS, {
    variables: { "limit": 99 },
    fetchPolicy: 'network-only'
  })

  loading && <div>loading...</div>

  console.log(data && data.allPosts.data)

  return (
    <div className="App">
      <NewPost />
      <Posts data={data} refetch={refetch}/>
    </div>
  );
}

export default App;
