import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateNote = () => {

    const {noteId} = useParams();
  return (
    <div>
        <h1 className='text-4xl text-center'>Update Notes :  {noteId}</h1>
      
    </div>
  )
}

export default UpdateNote
