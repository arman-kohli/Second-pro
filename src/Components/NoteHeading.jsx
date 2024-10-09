import React from 'react'
import { useNotes } from '../context/Notes-Context';

const NoteHeading = () => {
  const {notes,setNotes} = useNotes();
  return (
    <div className='border-b my-5 p-3 text-center'>
        <h1 className='font-bold'>Here is the list of the notes : </h1>
         <p>View All Notes</p>
         <p className='font-bold'>Number of notes : {notes.length} </p>
    </div>
  );
};

export default NoteHeading;
