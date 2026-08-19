import { Outlet } from "react-router-dom";

function ParentRoute(){
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default ParentRoute