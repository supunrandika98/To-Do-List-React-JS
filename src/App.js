import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {

  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTask =(event)=>{
      setNewTask(event.target.value);
  };

  const addNewTask=()=>{

      const task ={
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        complete: false
      }
      setToDoList([...todoList, task]);
  };

  const deleteTask=(taskname)=>{
      const newToDoList = todoList.filter((task)=>{
        if (task.id === taskname.id){
          return false;
        }
        else{
          return true;
        }
      });

      setToDoList(newToDoList);
  }

  const completeTask=(compTask)=>{
    setToDoList(
      todoList.map((task)=>{
          if( task.id === compTask.id){
            return {...task, complete: true}
          }
          else {
            return task;
          }
      })
    )
  }


  return (
    <div className="App">

      <h1 style={{fontSize: '3rem'}}>To-Do-List</h1>

      <div className="addTask">
        <Card className="addTaskCard" style={{ width: '18rem' }}>
          <Card.Body>
            <input placeholder="Enter Your Tasks!" onChange={handleTask}/>
            <Button variant="primary" onClick={addNewTask}>Add Task</Button>
          </Card.Body>
        </Card>
      </div> 


      <Card className="listTaskCard">
        <div className="list">

          {todoList.map((task)=>{
              return(
                
                <div className="toDo" style={{backgroundColor: task.complete ? 'green' : 'yellow'}}>
                  <h3 className="taskName" style={{color: task.complete ? 'white' : 'black' }}>{task.taskName}</h3>
                  <div>
                      <Button variant="danger" onClick={()=> deleteTask(task)}><FontAwesomeIcon icon={faTrashCan} className="fa-xl" /></Button>
                      <Button variant="dark" onClick={()=>completeTask(task)}>Completed</Button> 
                       
                  </div>
                </div>

              )            
          })
          }
        </div>
      </Card>

       
    </div>
  );
}

export default App;


 