import './App.css';
import { GET_POSTS, CREATE_POST, GET_POST } from './graphql/query'
import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import Posts from './posts';
import NewPost from './newPost';

function App() {

  const [limit, setLimit] = useState()

  const { loading, data, fetchMore, refetch} = useQuery(GET_POSTS, {
    variables: {
      limit: 1
    },
    fetchPolicy: 'network-only'
  })

  loading && <div>loading...</div>

  return (
    <div className="App">
      <NewPost />
      <Posts 
      data={data} 
      refetch={refetch} 
      setLimit={setLimit} 
      fetchMore={fetchMore}
      />
    </div>
  );
}

export default App;
