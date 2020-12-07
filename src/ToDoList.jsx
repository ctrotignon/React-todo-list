import React, { useState } from 'react';
import './ToDoList.css';

export default function ToDoList(){
    
    const [value, setValue] = useState('');
    const [list,setList] = useState([])
        

    function CreateElement(){

        if(value)
        {
            setList([value, ...list]);
            setValue('');
        }
    }

    function DeleteElement(i){
        const copyList = [...list];
        copyList.splice(i, 1);
        setList(copyList);
    }
    // return(
    // <div>
    //     <input value={value} onChange={event => setValue(event.target.value)} placeholder="Add ToDo"/>
    //     <button onClick={() => CreateElement()}> Add </button>
    //     {list.map((item,i) => 
    //     <div> 
    //         {item} 
    //         <button onClick={() => DeleteElement()}>Remove</button>
    //     </div>)}
    // </div>
    // )
}
