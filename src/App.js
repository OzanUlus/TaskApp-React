
import { useEffect, useContext } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import TasksContext from './context/task';

function App() {
  
  const {fetchTask} = useContext(TasksContext);

 useEffect(() =>{
  fetchTask();
 },[]);

 
  return (
    <div className="App">
      <TaskCreate />
   <h3>Tasks</h3>
   <TaskList/>
    </div>
  );
}

export default App;
