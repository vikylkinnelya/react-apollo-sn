import { gql } from "apollo-boost";

const GET_POSTS = gql`
    query GET_POSTS($limit:Int) {
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
    query GET_POST($id: ID!) {
        findPostByID(id: $id) {
            title
            body
        }
    }
`

const CREATE_POST = gql`
    mutation CREATE_POST($title: String!, $body: String!){
        createPost(data:{ title: $title, body: $body }) {
  	        title 
  	        body
     }
}
    `


const DELETE_POST = gql`
    mutation DELETE_POST($id: ID!) {
            deletePost(id: $id) {
                _id
            }
        }
`



export { GET_POSTS, CREATE_POST, GET_POST, DELETE_POST }