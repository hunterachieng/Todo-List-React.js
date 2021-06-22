import React, {useState} from 'react';
import data from './data.json'
import './App.css';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm  from './ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);
  let handleToggle = (id) =>{
    let mapped = toDoList.map( task=>{
      return task.id === Number(id)? {...task,complete :!task.complete}: {...task}
    });
    setToDoList(mapped);
     
  }
  let handleFilter = () =>{
    let filteredTask = toDoList.filter( task =>{
      return !task.complete;
    });
    setToDoList(filteredTask);
  }
  const addTask = (userInput) =>{
    let copyTask = [...toDoList];
    copyTask = [...copyTask, {id : toDoList.length + 1, task : userInput, complete: false}];
    setToDoList(copyTask);
  }
  return (
    <div className="App">
   <Header />
   <ToDoList toDoList ={toDoList} handleToggle ={handleToggle} handleFilter ={handleFilter}/><br />
   <ToDoForm addTask ={addTask} />
    </div>
  );
}

export default App;
