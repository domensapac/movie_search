import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function GenresDropdown(){
    return(
    <div className="relative group">
        <h1 className="group-hover:font-semibold hover:font-semibold cursor-pointer">GENRES</h1>
        <div className="absolute left-0 mt-1 w-90 bg-[#1c1b1b] border border-white/10 rounded-md shadow-xl 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300 z-50">
            <div className="grid grid-cols-2 gap-2 px-2 py-2">
                <div className="col-span-1">
                    <Link to="/genres/horror"><div>Horror</div></Link>
                    <Link to="/genres/crime"><div>Crime</div></Link>
                    <Link to="/genres/romance"><div>Romance</div></Link>
                </div>
                <div className="col-span-1">
                    <Link to="/genres/comedy"><div>Comedy</div></Link>
                    <Link to="/genres/thriller"><div>Thriller</div></Link>
                    <Link to="/genres/documentary"><div>Documentary</div></Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default GenresDropdown;