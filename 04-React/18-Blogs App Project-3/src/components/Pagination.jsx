import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Pagination (){
    const {page,HandlePageChange,totalPages} = useContext(AppContext)
    return (
        <div className="w-full flex justify-center items-center border fixed bottom-0 bg-white">
            <div className="w-11/12 max-w-[550px] flex items-center justify-around py-2">
                <div className="flex gap-3">
                    { page > 1 &&
                    <button className="border-2 px-5 py-1 rounded-sm"
                    onClick={() => HandlePageChange(page - 1) }>Previous</button>
                }
                {
                    page < totalPages && 
                    <button className="border-2 px-5 py-1 rounded-sm"
                    onClick={() => HandlePageChange (page + 1)}>Next</button>
                }
                </div>
                <p>Page {page} of {totalPages}</p>
            </div>
        </div>
    )
}
export default Pagination