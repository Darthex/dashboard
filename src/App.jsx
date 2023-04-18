import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {AuthContext} from "./contexts/AuthContext.jsx";
import SignIn from "./components/SignIn.jsx";
import Dashboard from "./components/Dashboard.jsx";

export default function App() {

    const currentUser = React.useContext(AuthContext)

    function ProtectedRoute({children}) {
        if (!currentUser) {
            return <Navigate to='/login'/>
        }
        return children
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={
                        <ProtectedRoute>
                            <Dashboard/>
                        </ProtectedRoute>
                    }/>
                    <Route path="login" element={<SignIn/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
