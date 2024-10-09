import React from 'react'
import { useParams } from 'react-router-dom'
import { useNotes } from '../context/Notes-Context';
import { notestatus } from '../Helpers/helper';

const ViewNote = () => {

    const { noteId, noteTitle } = useParams();
    console.log(" note id : ", noteId);
    console.log(" Note Title : ", noteTitle);

    const { notes, setNotes } = useNotes()
    const note = notes.find(note => note.id === parseInt(noteId));
    console.log('note', note);
    return (

        <div className='flex justify-center my-10 w-full '>

            <div className='border p-10 rounded shadow  bg-gray-800 flex flex-col gap-3'>
                <h1 className='font-semibold text-4xl'>{note.title}</h1>
                <p>{note.content}</p>
                <p>Date : {note.date}</p>
                <div className='flex justify-between gap-2'>
                    <p>Status : <span className='font-bold'>{notestatus[note.statusId]}</span></p>
                    <p>Note Id : {note.id}</p>
                </div>

                <div className='flex gap-3'>
                    <button className='py-1 px-3 bg-red-500  mt-2 text-white rounded hover:bg-red-900 '> Update</button>


                    <button className='py-1 px-3 bg-blue-500  mt-2 text-white rounded hover:bg-blue-900 '>Delete</button>

                </div>
            </div>
        </div>
    )
}

export default ViewNote
