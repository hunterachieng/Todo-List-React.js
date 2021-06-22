import React from 'react';
import ToDo from './ToDo';

export default function ToDoList ({toDoList, handleToggle, handleFilter}){
    return(
        <div>
            {toDoList.map(todo =>{
                return(
                    <ToDo todo={todo} handleToggle ={handleToggle} handleFilter ={handleFilter}/>
                )

            })}
            <br />
            <button className = "delete" onClick = {handleFilter}>Delete Completed</button><br />
        </div>
    );
};

