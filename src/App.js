import { useState } from 'react';
import './App.css';
import {Task} from './task';

function App() {
  const [todoList, setTodoList]= useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);
  };

  const addTask =()=>{
      const task ={
        id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
        taskName: newTask,
        completed: false,
        important: false,
      };
     const newTodoList= [...todoList, task];
     setTodoList(newTodoList);
  };
  const deleteTask =(id)=>{
    // const newTodoList = todoList.filter((task) =>{
    //   if (task === taskName){
    //     return false;
    //   }else{
    //     return true;
    //   }

    // });
    // setTodoList(newTodoList);
    setTodoList(todoList.filter((task) => task.id !== id));// this works the same as above function
  }

  const completeTask =(id) => {
    setTodoList(
      todoList.map((task) =>{
        if (task.id === id) {
          return {...task, completed: true};
        }else{
          return task;
        }
      })
    );
  };

   const importantTask = (id) => {
    setTodoList(
      todoList.map((task) =>{
        if (task.id === id) {
          return {...task, important: true};
        }else{
          return task;
        }
      })
    );
   }
  return (
  <div className="App">
    <div className='addTask'>
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
      
    </div>

    <div className='list'>
      {todoList.map((task) =>{
        return <Task taskName={task.taskName} 
        id={task.id} 
        deleteTask={deleteTask} 
        completed={task.completed}
        completeTask={completeTask}
        important={task.important}
        importantTask={importantTask}
        />
      })}
    </div>
  </div>);
    
}

export default App;
