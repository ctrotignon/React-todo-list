import React, {useState} from 'react';

export default function ListTodo() {
    const [list, setList] = useState([]);

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

    function removeItemsFromList(i){
        let listCopy = [...list];
        listCopy.splice(i, 1);
        setList(listCopy);
    }
    return (
        <div>
            {list.map((item, key) => <p> <input value={item} onChange={TaskChange}/> <button onClick={() => handleClick(key)}>Delete</button> <br/></p>)} 
        </div>
    )
}
