import './TaskManager.css';
import {useState} from 'react'
import Task from './components/Task'
import Add from './components/Add'


function App() {
  
  //prepopulated task list to show example usage
  const [taskList, setTaskList] = useState([
    {id:1, description: "Do laundry", date: "6/26", time: "12 pm"}, 
    {id:2, description: "Finish coding Assigment", date: "6/29", time: "11:59 pm"},
    {id:3, description: "Make dentist appointment", date: "6/29", time: "3:30 pm"}
  ])
  //delted task from task list 
  const deleteTask = (id) =>{
    setTaskList(
      taskList.filter((task)=> task.id !== id)
    )

  }
  //add task from task list 
  const addTask = ({description,date,time})  => {
    const id = Math.floor(Math.random()*1000) +1 
    const newAddedTask = { id: id, description: description, date: date, time:time}
    setTaskList([...taskList, newAddedTask])

  }
  //debigging purposes 
  //console.log(taskList)
  return (
    <div className="task-container column">
      <h1 className = "header">Task Manager</h1>
      <Add onAdd = {addTask}/>
      {/* iterate through taskList to render all tasks on task container */}
      {
        taskList.map((task) => 
        <Task id= {task.id} description = {task.description} date = {task.date } time = {task.time} onDelete = {deleteTask}/>)

      }
    
    </div>
  );
}

export default App;
