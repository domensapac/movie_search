import { useEffect, useState } from 'react'

function Pagination({currPage, setCurrPage}){
    const allPages= 500; 
    const getPages = () => {
        const pages=[]; 

        return pages; 
    }
    return (
        <div className="inline-flex">
            <button onClick={() => setCurrPage(currPage-1)} disabled={currPage<=1} className="hover:bg-gray-500 border-1 border-white font-bold py-1 px-3 rounded-l cursor-pointer disabled:cursor-not-allowed">
                Prev
            </button>
            <button onClick={() => setCurrPage(currPage-1)} disabled={currPage<=1} className=" hover:bg-gray-500 border-1 border-white font-bold py-1 px-3  cursor-pointer disabled:cursor-not-allowed">
                1
            </button>
            <button onClick={() => setCurrPage(currPage+1)} className="hover:bg-gray-500 border-1 border-white font-bold py-1 px-4  cursor-pointer">
                ...
            </button>
            <button onClick={() => setCurrPage(currPage+1)} className="hover:bg-gray-500 border-1 border-white font-bold py-1 px-4 cursor-pointer">
                {currPage}
            </button>
            <button onClick={() => setCurrPage(currPage+1)} className="hover:bg-gray-500 border-1 border-white font-bold py-1 px-4  cursor-pointer">
                ...
            </button>
            <button onClick={() => setCurrPage(currPage+1)} className="hover:bg-gray-500 border-1 border-white font-bold py-1 px-4 cursor-pointer">
                500
            </button>
            <button onClick={() => setCurrPage(currPage+1)} className=" hover:bg-gray-500 border-1 border-white font-bold py-1 px-4 rounded-r cursor-pointer">
                Next
            </button>
        </div>
    );
}


export default Pagination; 