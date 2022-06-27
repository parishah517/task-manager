import {AiFillCloseCircle} from 'react-icons/ai'
import {useState} from 'react'

const Add = ({onAdd}) => {
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    
    const onSubmit = ({description,date,time}) => {
        // handle empty description input on submit
        if(!description ){
            alert('Please enter a task')
            return
        }
        //reset all the input fields after user presses add button
        onAdd({description,date,time})
        setDescription('')
        setDate('')
        setTime('')
  }

    return(
        // user inputs task information
        <div className = 'add-container'>
            <form >
                <div className = 'user-input'>
                    <label>Task: </label>
                    <input type = 'text' value={description} placeholder = 'Enter Task' onChange={(e)=> setDescription(e.target.value)} />
                </div>
                <div className = 'user-input'>
                    <label>Date: </label>
                    <input type = 'text' value={date} placeholder = 'Enter Date' onChange={(e)=> setDate(e.target.value)} />
                </div>
                <div className = 'user-input'>
                    <label>Time: </label>
                    < input type = 'text' value={time}placeholder = 'Enter Time' onChange={(e)=> setTime(e.target.value)}/>
                </div>
            </form>
            {/* add  button to add task information to current task list  */}
            <button onClick = {() => onSubmit({description,date,time})} className = "addBtn"> Add Task </button>
        </div>

    );

}

export default Add;