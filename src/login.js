import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER, } from './graphql/query';
import { useEffect, useCallback } from 'react';

const Login = () => {


    const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0()

    /* const getToken = async () => {
        try {
            const token = await getAccessTokenSilently();
            console.log( token)
        } catch (e) {
            console.error(e);
        }
    }; */

    const createUserHook = useCallback(() => {
        user && createUser({ variables: { userName: user.nickname, email: user.email, picture: user.picture, id: user.sub } })
        //getToken()
    }, [user])

    useEffect(() => {
        createUserHook()
    }, [createUserHook])

    const [createUser] = useMutation(CREATE_USER, {
        //onCompleted: data => console.log('Data from mutation:', data),
        onError: error => console.log('error with setting user:', error)
    })

    const onLogIn = () => {
        loginWithRedirect()
    }

    return (
        <>
            {isAuthenticated ?
                <img src={user.picture} alt={user.name} width={'30px'} />
                : <button onClick={() => onLogIn()} className="login">
                    Login
                </button>}
        </>
    )
}

export default Login