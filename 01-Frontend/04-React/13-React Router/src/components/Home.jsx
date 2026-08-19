import { Outlet } from "react-router-dom"

function Home() {
    return (
        <div>
            <Outlet/>
            <h1>Welcome to Home Page</h1>
        </div>
    )
}
export default Home