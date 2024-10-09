// create context 

import { createContext, useContext, useState } from "react";

const NoteContext=createContext();

// 2 . provider - normal component that providers the values to 
// consumer 

 export const NoteProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated]=useState(true);
    const [notes,setNotes] = useState([
        {
            id: 1,
            title:"this one is dummy app ",
            content:" this one is the example of context Api",
            statusId:1,
            date:"today", 
        }
    ]);
    // kon sa data hame provide karna hi 
    return(
        <NoteContext.Provider value={{
                 notes,
                 setNotes,
                 isAuthenticated,
                 setIsAuthenticated,
            }}
            >
         {children}
        </NoteContext.Provider>
    );

    };
    // isko call karke ap use kar paoge
     export const useNotes= () =>{
    // have to completed 
    return useContext(NoteContext);
    }