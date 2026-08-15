import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Pagination (){
    const {page,HandlePageChange,totalPages} = useContext(AppContext)
    return (
        <div className="">
            <div className="flex gap-8">
                { page > 1 &&
                    <button onClick={() => HandlePageChange(page - 1) }>Previous</button>
                }
                {
                    page < totalPages && 
                    <button onClick={() => HandlePageChange (page + 1)}>Next</button>
                }
                <p>Page {page} of {totalPages}</p>
            </div>
        </div>
    )
}
export default Pagination