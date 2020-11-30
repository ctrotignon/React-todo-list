import React, { useState } from 'react';

function Test(){

    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    
    function onCreateItem(){


        if (input)
        {
            setList([input, ...list]);
            setInput('');
        }
        else {
            alert('tape quelque chose');
        }
        
    }
    function removeItemsFromList(i){
        let listCopy = [...list];
        listCopy.splice(i, 1);
        setList(listCopy);
    }
    return (
        <div>
            <input value={input} onChange={event => setInput(event.target.value) }/>
            <button onClick = {() => onCreateItem() }> Create</button>
            {list.map((item, i) => <div> {item} <button onClick ={ () => removeItemsFromList(i) }>Delete</button> </div>)} 
        </div>

    );
}

export default Test;