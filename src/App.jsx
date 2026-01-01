import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [todo,setTodo]=useState("")
  const [tasks,setTasks]=useState([])
  const [edited,SetEdit]=useState(null)
  const addTask =()=>{
    if(todo.trim()=="") return 
    if(edited===null){
    setTasks([...tasks,todo]);
    setTodo("");
    }
    else{
      const updated=[...tasks]
      updated[edited]=todo
      setTasks(updated)
      SetEdit(null)
      setTodo("")
    }
  }
  const deleteTask=(index)=>{
    setTasks(tasks.filter((t,ind)=>ind!=index));
  }
  const EditTask=(index)=>{
    setTodo(tasks[index])
    SetEdit(index)
  }
  return (
    <>
      <Navbar />
      <div className="body flex justify-center">
        <div className="container flex justify-center items-center  flex-col">
          <h1 className='font-mono text-4xl'>Your Tasks</h1>
          <div className="inp border rounded-2xl h-9 w-1/2 relative flex items-center justify-between border-none bg-[#eeeff2]
          ">
            <input
              type="text"
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
              onKeyDown={(e)=>{if(e.key==="Enter") addTask()}}
              placeholder="Add Your tasks" className='focus:outline-none m-2 p-1 focus-within:border-[#75b3dc] w-full'
            />
            <span onClick={addTask}  className="material-symbols-outlined bg-green-400 rounded-full h-10 w-10 text-center p-2 hover:cursor-pointer hover:shadow-blue-700 shadow-2xl">
              add
            </span>
          </div>
          <div className="tasks w-full">
            <ul>
              {tasks.map((task,index)=>(
              <li key={index} className='h-9 w-[85%] m-3 border flex relative rounded-2xl p-1 items-center font-stretch-50%'>
                <span>{task}</span>
                <span onClick={()=>EditTask(index)} className="material-symbols-outlined  absolute right-3 mx-2 hover:cursor-pointer hover:bg-amber-300 rounded-full">
                  edit
                </span>
                <span onClick={()=>deleteTask(index)} className="material-symbols-outlined absolute right-9 mx-3  hover:cursor-pointer hover:bg-amber-300 rounded-full ">
                  delete
                </span>
              </li>
               ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
