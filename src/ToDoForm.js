import  React ,{useState} from 'react';

export default function ToDoForm ({addTask}){
    const [userInput, setUserInput] = useState("");
    const handleChange = e =>{
        setUserInput(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return(
        <div>
            <form>
                <input className = "input" type = "text" value = {userInput} placeholder = "Enter tasks ..." onChange = {handleChange}/>
                <br/><br/>
                <button onClick = {handleSubmit}className = "submit">Submit</button>
            </form>
        </div>

    )
}