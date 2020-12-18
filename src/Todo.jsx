import React, { useState } from 'react';
import {framer} from 'framer-motion';
import TaskDetails from './TaskDetails';
import Summary from './Summary';
import './Todo.css';

function Todo(){
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [hideCheckedTasks, setHideCheckedTasks] = useState(false);

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
            setList([{title:input, checked:false}, ...list]);
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
        listCopy[key].title = newValue;
        setList(listCopy);
    }

    function checkedItemFromList(key){
        let listCopy = [...list];
        listCopy[key].checked = !listCopy[key].checked;
        setList(listCopy);
    }

    function handleHideAndDisplayCheckedTasks(){
        setHideCheckedTasks(!hideCheckedTasks);
    }

    function displayTask(item, key){
        if(hideCheckedTasks && item.checked){
            return null;
        }

        return(
            <TaskDetails task={item} index={key} key={key} editItem={editItemFromList} deleteItem={removeItemFromList} checkItem={checkedItemFromList} />
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleCreateFieldChange} placeholder="Add a task"/>
            <motion.input type="submit" value="+" className="add-button"/
            initial={{}}>
            </form>
            <div>
             <input type="checkbox" checked={hideCheckedTasks} onClick={handleHideAndDisplayCheckedTasks} />
            <label>Hide checked tasks</label>
            </div>
            {list.map(displayTask)} 
            <Summary list={list} />
        </div>
    );
}

export default Todo;