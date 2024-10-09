import React from 'react'
import { Navigate } from 'react-router-dom';
import { useNotes } from '../context/Notes-Context';

const ProtecteRoute = ({element : Component }) => {

    
   // const isAuthenticated = false;
   const {isAuthenticated} = useNotes();
  
    return isAuthenticated ? <Component/> : <Navigate to={"/"}/>;
  
};

export default ProtecteRoute;
