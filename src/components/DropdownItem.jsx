import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function DropdownItem({genre}){
    return (
       <div className="hover:font-semibold">{genre}</div>
    ); 
}

export default DropdownItem; 