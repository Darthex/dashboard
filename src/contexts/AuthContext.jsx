import React, {createContext} from "react";
import {auth} from "../utils/firebaseConfig.js";
import {onAuthStateChanged} from "firebase/auth"

export const AuthContext = createContext({})

export function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = React.useState({})

    React.useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return() => {
            unsub()
        }
    }, [])

    return(
        <AuthContext.Provider value={currentUser}>
            {props.children}
        </AuthContext.Provider>
    )
}
