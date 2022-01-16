import { useApolloClient } from "@apollo/react-hooks"

export const Logout = () => {
    const client = useApolloClient()

    const onLogout = () => {
        logoutUser()
        client.resetStore().then(() => console.log('logged out'))
    }

    return <button onClick={onLogout}>logout</button>
}