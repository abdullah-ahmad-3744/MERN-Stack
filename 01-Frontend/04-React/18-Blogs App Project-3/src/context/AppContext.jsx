import { createContext, lazy, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";


const AppContext = createContext();

function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
    const [posts,setPosts] = useState([])

    async function fetchBlogsPosts(page=1) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        try {
            const apiResponse = await fetch(url)
            const data = await apiResponse.json()
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.log("Error in fetching data : ",error)
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false )
    }

    function HandlePageChange(page){
        setPage(page);
        fetchBlogsPosts(page);

    }


   const value = {
        page,
        setPage,
        loading ,
        setLoading,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        HandlePageChange,
        fetchBlogsPosts,
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export {AppContext, AppContextProvider}