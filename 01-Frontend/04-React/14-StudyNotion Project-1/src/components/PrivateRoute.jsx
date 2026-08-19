import {Navigate } from "react-router-dom"

function PrivteRoute({isLoggedIn, children}){
    if (isLoggedIn) {
        return children
    } else {
        return <Navigate to='/login'/>
    }
}
export default PrivteRoute