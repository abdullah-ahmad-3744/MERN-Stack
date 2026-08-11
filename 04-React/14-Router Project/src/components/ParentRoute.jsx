import { Outlet } from "react-router-dom";

function ParentRoute(){
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}
export default ParentRoute