import { useEffect, useState } from 'react'


function TodoItem({name}){
  console.log(name);
  return(
    <h1>{name}</h1>
  )
}

function App() {
  const [itemList, setItems] = useState(["Kupi mleko", "Naredi domačo", "Trening"]); 
  return (
    <div>
    {itemList.map( item=> (
        <TodoItem name={item}/>
    ))}
    </div>
    
  );
}

export default App;