import React, {useState} from 'react';


export default function TaskDetails(props) {
    function handleTaskChange(event){
        props.editItem(props.index, event.target.value);
    }
    
    return(
        <div>
            <input value={props.taskTitle} onChange={handleTaskChange}/>
            <button onClick={() => props.deleteItem(props.index)}>Delete</button>
            <br/>
        </div>
    );
}
