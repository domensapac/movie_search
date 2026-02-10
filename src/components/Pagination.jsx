import { useEffect, useState } from 'react'

function Pagination({currPage, setCurrPage}){
    return (
        <div className="inline-flex">
            <button onClick={() => setCurrPage(currPage-1)} disabled={currPage<=1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-l cursor-pointer disabled:cursor-not-allowed">
                Prev
            </button>
            <button onClick={() => setCurrPage(currPage+1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-r cursor-pointer">
                Next
            </button>
        </div>
    );
}


export default Pagination; 