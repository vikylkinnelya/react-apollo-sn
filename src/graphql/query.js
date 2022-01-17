import { gql } from '@apollo/react-hooks';

const GET_POSTS = gql`
    query allPosts($limit:Int) {
        allPosts(_size: $limit) {
            data {
                _id
                _ts
                title
                body
    }
  }
}
`

const GET_POST = gql`
    query getPost($id: ID!) {
        findPostByID(id: $id) {
            title
            body
        }
    }
`

const CREATE_POST = gql`
    mutation createPostItem($title: String!, $body: String!){
        createPost(data:{ title: $title, body: $body }) {
  	        title 
  	        body
     }
}
    `


const DELETE_POST = gql`
    mutation deletePostItem($id: ID!) {
            deletePost(id: $id) {
                _id
            }
        }
`



export { GET_POSTS, CREATE_POST, GET_POST, DELETE_POST }