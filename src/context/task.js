import { createContext } from "react";
import { useState } from 'react';
import axios from 'axios';

const TasksContext = createContext();

function Provider({ children }) {
    const [tasks, setTasks] = useState([]);
  
    const createTask = async (title, desc) => {
      const response = await axios.post('http://localhost:3001/tasks', {
        title,
        desc,
      });
      console.log(response);
      const createdTask = [...tasks, response.data];
      setTasks(createdTask);
    };
  
    const fetchTask = async () => {
      var response = await axios.get('http://localhost:3001/tasks');
      console.log(response);
      setTasks(response.data);
    };
  
    const deleteTaskById = async (id) => {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      const afterDeletingTasks = tasks.filter((task) => {
        return task.id !== id;
      });
      setTasks(afterDeletingTasks);
    };
  
    const editTaskById = async (id, updatedTitle, updatedDesc) => {
      await axios.put(`http://localhost:3001/tasks/${id}`, {
        title: updatedTitle,
        desc: updatedDesc,
      });
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, title: updatedTitle, desc: updatedDesc };
        }
        return task;
      });
      setTasks(updatedTasks);
    };
  
    const sharedValuesAndMethod = {
      tasks,
      createTask,
      fetchTask,
      deleteTaskById,
      editTaskById,
    };
  
    return (
      <TasksContext.Provider value={sharedValuesAndMethod}>
        {children}
      </TasksContext.Provider>
    );
  }
  
    

export {Provider};
export default TasksContext;