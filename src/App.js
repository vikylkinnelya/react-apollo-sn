import logo from './logo.svg';
import './App.css';
import { GET_POSTS, CREATE_POST, GET_POST } from './graphql/query'
import { useQuery } from '@apollo/react-hooks';
import Posts from './posts';

function App() {

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { limit: 5 },
    //fetchPolicy: 'network-first'
  })
  loading && <div>loading...</div>
  error && <div> error!</div>

  /* data.posts.map(post => <Post key={post.id} post={post} />) */

  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
