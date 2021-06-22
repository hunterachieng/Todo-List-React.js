import React from 'react';

export default function ToDo ({todo, handleToggle}){
    let clickHandler = e =>{
        e.preventDefault();
        handleToggle(e.currentTarget. id);
    }
    return(
        <div id = {todo.id} key= {todo.id + todo.task} value = {todo.id} name = "todo" className ={todo.complete? " todo strike": "todo"} onClick = {clickHandler}>
            {todo.task}
        </div>
    );
};