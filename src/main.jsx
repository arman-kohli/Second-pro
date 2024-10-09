import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter
  ,Outlet,RouterProvider
 } from 'react-router-dom'
import { NoteProvider } from './context/Notes-Context.jsx'
import AddNode from './Pages/AddNode.jsx'
import ViewNotes from './Pages/ViewNotes.jsx'
import { ToastBar, Toaster } from 'react-hot-toast'
import Root from './Pages/Root.jsx'
import ViewNote from './Pages/ViewNote.jsx'
import Home from './Pages/Home.jsx'
import ShowData from './Pages/ShowData.jsx'
import ProtecteRoute from './Components/ProtecteRoute.jsx'
import UpdateNote from './Pages/UpdateNote.jsx'
import Samosa from './Components/Samosa.jsx'


 const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
     errorElement : <div>this one is the error pages ...</div>,
  children :[
    {
   path: "",
   element:<Home/>,
    },
    
  {
    path:'/About',
    element: <div>About</div>
  },
  {
    path:'/Contect',
    element:<div>context</div>
  },
  {
    path:'/add-notes',
    element: <ProtecteRoute element={AddNode} />
  },

  {
    path:'/notes',
    element: <ProtecteRoute element={ViewNotes}/>,
  },
  {
    path:"/note/:noteId/:noteTitle",
    element:<ProtecteRoute element={ViewNote}/>
  },
  {
   path :"note/update/:noteId",
   element:<ProtecteRoute element={UpdateNote}/>
  },
  {
    path:"data/:dataId",
    element:<ProtecteRoute element ={ShowData}/>,
    loader: async ({request ,params}) =>{
      console.log(params.dataId);
     const result= await fetch(
      "https://jsonplaceholder.typicode.com/posts"
     );
     return result;
    },
  },
  ],
},
 ]);



createRoot(document.getElementById('root')).render(

//   <StrictMode>
// <NoteProvider>
//   <Toaster/>
// <RouterProvider router={router}/>
// </NoteProvider> 
//    <Samosa/>
//   </StrictMode>,
<>

<NoteProvider>
   <Toaster/>
<RouterProvider router={router}/>
 </NoteProvider> 
  


</>
);
