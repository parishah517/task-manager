import {AiFillCloseCircle} from 'react-icons/ai'

const Task = ({id, description, date, time, onDelete}) => {
    return(
        <div className = 'task'>
            
            <button className = 'closeBtn' onClick = {() => onDelete(id)}> 
                <  AiFillCloseCircle className = 'circle'/>
            </button>
            <div className = "task-display">
                <div > {description}</div>
                <div> {date}</div>
                <div> {time}</div>
            </div>
            
        </div>

    );

}

export default Task;