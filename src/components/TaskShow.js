import { useState } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from '../context/task';
import {  useContext } from 'react';

function TaskShow({task}) {

    const {deleteTaskById,editTaskById} = useContext(TasksContext);
    const [showUpdate, setShowUpdate] = useState(false)
    const handleDelete = () =>{
        // onDelete(task.id); 
        deleteTaskById(task.id)
    };
    const handleUpdate = () =>{
      setShowUpdate(!showUpdate)
    }
    const handleSubmit = (id,updatedTitle,updatedDesc) =>{
        setShowUpdate(false)
        // onEdit(id,updatedTitle,updatedDesc);
        editTaskById(id,updatedTitle,updatedDesc)
    }
    console.log(task)
    return <div className="task-show">

        {showUpdate ? 
        <TaskCreate task={task} taskformUpdate={true}  />  : <div> 
            <h3 className="task-title">Task</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Description</h3>
        <p>{task.desc}</p>
        <div>
            <button className="task-delete" onClick={handleDelete}>Delete</button>
            <button className="task-update"onClick={handleUpdate}>Update</button>
        </div>
        </div>}
        
       
    </div>;
}

export default TaskShow;