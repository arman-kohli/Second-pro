import React, { useState } from 'react'
import { useNotes } from '../context/Notes-Context'
import NoteHeading from '../Components/NoteHeading';
import NodeList from '../Components/NodeList';

const ViewNotes = () => {

//  const ob=useNotes()
// following optimized way
const {notes,setNotes}=useNotes();

  return (
  <div className=' mx-auto  flex-col md:flex-row'>
    <NoteHeading/> 
    {notes.map((note,index) =>(
     <NodeList  key={index}    note={note} />
    ))}

    {
      notes.length <= 0 ? (
        <h1 className='text-4xl text-center'>NO Notes Available...</h1>
      ) : (
        " "
    )}
    </div> 
);
};
    
  

export default ViewNotes;
