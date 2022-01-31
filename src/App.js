import './App.css';
import { GET_POSTS, CREATE_POST, GET_POST } from './graphql/query'
import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import Posts from './posts';
import NewPost from './newPost';
import Login from './login';
import Logout from './logout'

function App() {

  const [limit, setLimit] = useState(5)

  const { loading, data, fetchMore, refetch } = useQuery(GET_POSTS, {
    variables: {
      limit: limit
    },
    fetchPolicy: "network-only"
  })

  loading && <div>loading...</div>

  return (
    <div className="App">

      <Login />
      <Logout />

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
