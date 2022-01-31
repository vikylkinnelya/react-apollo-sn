import { gql } from '@apollo/react-hooks';

const CREATE_USER = gql`
    mutation createUser($email: String!, $userName: String!, $picture: String!, $id: String!) {
        createUser(data: {email: $email, userName: $userName, picture: $picture, id: $id}) {
            email
            userName
            picture
            id
        }
    }
`

const GET_USER = gql`
    query users($userName: String!) {
        users(userName: $userName) {
            data {
                _id
                userName
                picture
            }
        }
    }
`

const GET_POSTS = gql`
    query posts($limit:Int, $cursor: String) {
        posts(_size: $limit, _cursor: $cursor) {
            data {
                _id
                _ts
                title
                body
                comments{
                  author {
                    userName
                  }
                }
                likes{
                   author{
                       userName
                       }
                }
            }, 
            after
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
    mutation createPostItem($title: String!, $body: String!, ){
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



export { GET_POSTS, CREATE_POST, GET_POST, DELETE_POST, CREATE_USER, GET_USER }