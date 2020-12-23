import React from 'react'

export default function Summary(props){
    function countCheckedItems(){
        let counter = 0;
        
        props.list.forEach(task => { 
            if(task.checked === true){
                counter++;
            }
        });
        return counter;
    }

    const checkedItems = countCheckedItems();
    return (
        <div>
            Total items : {props.list.length} <br/> 
            Total items checked: {checkedItems} <br/> 
            Total items unchecked: {props.list.length - checkedItems} <br/> 
        </div>
    )
}
