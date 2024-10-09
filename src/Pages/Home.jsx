import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useNotes } from '../context/Notes-Context';

const Home = () => {
     const {isAuthenticated,setIsAuthenticated}=  useNotes();
    const navigate=useNavigate();

function handleAddNoteClick(){
   navigate("/add-notes")
}

  return (
    <div className='flex justify-center  py-3 mt-14 bg-gray-700  shadow rounded'>
      <div className='flex flex-col gap-3 text-center mt-16 '>
      <h1 className='font-bold'>welcome to Note App</h1>
      <p>this one is myh first notes app</p>
      <p>this one is very best performence owerking in ti he sfs</p>
      <p>This is the best way to create our web applicataion </p>
      <button onClick={handleAddNoteClick} className='bg-indigo-300 px-4 py-5 hover:bg-indigo-900 rounded'>Start Notes</button>

      <button onClick={()=>{
        setIsAuthenticated(!isAuthenticated);
        navigate("/data/34223");
      }} 
      className={`bg-${
        isAuthenticated ? "yellow" : "red"
      }-700 rounded hover:bg-indigo-800 px-3 py-2`}
       >
        {isAuthenticated ? "Logout" : " login "}
       </button>
      </div>
    </div>
  )
}

export default Home
