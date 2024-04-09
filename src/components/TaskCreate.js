import {useState} from 'react';
import TasksContext from '../context/task';
import {  useContext } from 'react';

function TaskCreate({task,taskformUpdate}) {

    const { createTask,editTaskById } = useContext(TasksContext);


    const [title, setTitle] = useState(task ? task.title : "")
    const [desc, setDesc] = useState(task ? task.desc : "")
     
    const handleChangeTitle = (event) =>{
        setTitle(event.target.value);
    }
    const handleChangeDesc = (event) =>{
        setDesc(event.target.value);
    }
    const handleSubmit = (event) =>{
       event.preventDefault();
       if(taskformUpdate){
        // onUpdate(task.id,title,desc)
        editTaskById (task.id,title,desc)
       }
       else{
        // onCreate(title,desc);
        createTask(title,desc)
       }
      
       setTitle("");
       setDesc("");
       
    }
    return ( 
        <div>
            {taskformUpdate ? 
            <div className="task-updatee">
        <h3>Please UpdateTask</h3>
        <form className="task-form">
        <label className="task-label">Update Task Title</label>
        <input value={title} onChange ={handleChangeTitle} className="task-input" />
        <label className="task-label">Update Description</label>
        <textarea value={desc} onChange={handleChangeDesc} className="task-input" rows={5} />
        <button className="task-button update-button" onClick={handleSubmit}>Update</button>
        </form>
       
    </div> : 
    <div className="task-div">
        <h3>Please Create Task</h3>
        <form className="task-form">
        <label className="task-label">Task Title</label>
        <input value={title} onChange ={handleChangeTitle} className="task-input" />
        <label className="task-label">Description</label>
        <textarea value={desc} onChange={handleChangeDesc} className="task-input" rows={5} />
        <button className="task-button" onClick={handleSubmit}>Create</button>
        </form>
       
    </div>  } 
        </div>
    )
}

export default TaskCreate;