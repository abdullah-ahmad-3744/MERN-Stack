import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Pagination (){
    const {page,HandlePageChange,totalPages} = useContext(AppContext)
    return (
        <div className="w-full h-14 flex justify-center items-center">
            <div className="flex items-center gap-5">
                { page > 1 &&
                    <button className="border px-5 py-1 rounded-sm"
                    onClick={() => HandlePageChange(page - 1) }>Previous</button>
                }
                {
                    page < totalPages && 
                    <button className="border px-5 py-1 rounded-sm"
                    onClick={() => HandlePageChange (page + 1)}>Next</button>
                }
                <p>Page {page} of {totalPages}</p>
            </div>
        </div>
    )
}
export default Pagination