import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNode from './Pages/AddNode'
import { Toaster } from 'react-hot-toast'
import ViewNote from './Pages/ViewNotes'
import { NoteProvider } from './context/Notes-Context'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <NoteProvider>

    <Toaster/>
    <ViewNote/>
      <AddNode/>
    </NoteProvider>
    
    </>
  )
}

export default App
