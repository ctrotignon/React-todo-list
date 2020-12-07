import React, { useState } from 'react';
import TaskDetails from './TaskDetails';

function Todo(){

    
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    // const [list, setList] = useState([{title:'a', checked: true},{title:'b', checked: false}]);

    function handleSubmit(event){
        onCreateItem();
        event.preventDefault();

    }

    function handleCreateFieldChange(event){
        setInput(event.target.value);
    }

    function onCreateItem(){
        if (input)
        {
            setList([input, ...list]);
            setInput('');
        }
        else {
            alert('Veuillez entrer un texte');
        }  
    }

    function removeItemFromList(i){
        let listCopy = [...list];
        listCopy.splice(i, 1);
        setList(listCopy);
    }

    function editItemFromList(key, newValue){
        let listCopy = [...list];
        listCopy[key] = newValue;
        setList(listCopy);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleCreateFieldChange}/>
            <input type="submit" value="Add"/>
            </form>
            {list.map((item, key) => <TaskDetails taskTitle={item} index={key} key={key} editItem={editItemFromList} deleteItem={removeItemFromList} />)} 
        </div>

    );
}

export default Todo;