
function ActorCard({name, character, picPath}){
    return(
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <div className="flex flex-col justify-center text-center">
                    <img className="aspect-square m-auto mb-2 object-cover w-40 h-40 min-w-[160px] min-h-[160px] rounded-tl-2xl rounded-br-2xl" src={`https://image.tmdb.org/t/p/w1280${picPath}`}></img>
                    <span className="w-full text-center text-xl font-semibold">{name}</span>
                    <span className="w-full text-center items-stretch h-20 text-md">"{character}"</span>
                </div>
            </div>
    )
}

export default ActorCard; 