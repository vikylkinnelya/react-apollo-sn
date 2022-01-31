import { useApolloClient } from "@apollo/react-hooks"
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {

    const client = useApolloClient()
    const { logout } = useAuth0();

    const onLogout = () => {
        logout({ returnTo: window.location.origin })
        client.resetStore().then(() => console.log('logged out'))
    }

    return <button onClick={onLogout}>logout</button>
}

export default Logout