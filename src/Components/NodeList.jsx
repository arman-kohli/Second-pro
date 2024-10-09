import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNotes } from '../context/Notes-Context';

const NodeList = ({note}) => {

    const {notes,setNotes} = useNotes();

  function deleteNotes(event,noteId){
    console.log(noteId);
    const newNoteList=notes.filter((note) => note.id != noteId);
    setNotes(newNoteList);
  }
  return (
    
        
    <div className='p-5 my-3 border  w-full md:w-2/3  mx-auto  rounded  shadow bg-gray-700'>
    <h1 className='text-3xl font-semibold'>{note.title}</h1>
     {/* <p>{note.content}</p> */}
     {/* <p>status : {note.statusId}</p> */}
     <p>data : {note.date}</p>
     <div className='flex gap-2'>
      <NavLink to={`/note/${note.id} /${note.title}`}>
      <button className='py-</NavLink>1 px-3 bg-green-500 mt-2 text-white rounded hover:bg-green-900 '>View</button>
       </NavLink>
       
       <NavLink to={`/note/update/${note.id}`}>
      <button className='py-1 px-3 bg-red-500  mt-2 text-white rounded hover:bg-red-900 '> Update</button>
      </NavLink>

      <NavLink>
      <button onClick={(event) =>{
        deleteNotes(event,note.id)
      }}  className='py-1 px-3 bg-blue-500  mt-2 text-white rounded hover:bg-blue-900 '>Delete</button>
      </NavLink>

     </div>
    
      
    </div>
  )
}

export default NodeList
