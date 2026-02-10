
function Footer(){
    return(
    <>
        <div className=" bg-[#1c1b1b] h-auto flex justify-center items-center">
            <div className="mt-2 mb-2 grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <span>Used:</span>
                </div>
                <div className="col-span-1 flex flex-col">
                    <span>React</span>
                    <span>Tailwind</span>
                    <span>Lucide icons</span>

                </div>
                <div className="col-span-1 flex flex-col">
                    <span>TMDB Api</span>
                    <span>GitHub</span>
                </div>
            </div>
        </div>
    </>
    ); 
}

export default Footer; 