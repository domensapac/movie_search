
function ActorCard({name, picPath}){
    return(
            <div className="justify-center md:justify-between">
                <div className="justify-center text-center">
                    <img className="mb-2 object-cover w-40 h-40 rounded-full" src={`https://image.tmdb.org/t/p/w1280${picPath}`}></img>
                    <span className="text-lg font-semibold">{name}</span>
                </div>
            </div>
    )
}

export default ActorCard; 