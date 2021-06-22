import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
    const [showAddTask,setShowAddTask] = useState(false)
    const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day : 'Feb 5th at 2:30pm',
        reminder : true
    },
    {
        id:2,
        text:'Meeting at School',
        day : 'Feb 6th at 1:30pm',
        reminder : true
    }
    ,{
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        reminder : true
    }
])
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000)+1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }
  const deleteTasks = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(t => t.id === id ? {...t,reminder:!t.reminder} : t))
  }
  return (
    <div className="container">
      <Header onAdd = {()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTasks} onToggle={toggleReminder}/>: "No Tasks"}
    </div>
  );
}
//delete task

export default App;
