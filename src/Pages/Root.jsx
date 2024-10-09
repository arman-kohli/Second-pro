import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useNotes } from '../context/Notes-Context'

const Root = () => {
    const {isAuthenticated,SetIsAuthenticated}=useNotes();

  return (
    <div className='flex   mx-auto  flex-col md:flex-row'>
        {/* side menu  */}
      <div className='w-[250px] p-4  md:w-1/4  mx-auto   '>
      <h1 className='font-bold text-2xl text-center'>Notes Apps </h1>
      <h2 className='font-bold text-2xl
      
      
      0'>{isAuthenticated ? " logged in Now ":" logged Out Not "}</h2>
      <ul className='mt-5   rounded '>
      <li className='py-3 bg-indigo-300 text-center rounded hover:bg-indigo-900'> 
          <NavLink to ="/">Home</NavLink>
          </li>
        <li className='py-3 mt-3 bg-indigo-300 text-center rounded  hover:bg-indigo-900'> 
          <NavLink to ="/add-notes">Add-notes</NavLink>
          </li>
        <li className='py-3 mt-3 bg-indigo-300 text-center rounded  hover:bg-indigo-900'>
          <NavLink to ="notes">View-notes</NavLink>
          </li>
          <li className='py-3 mt-3 bg-indigo-300 text-center rounded  hover:bg-indigo-900'>
          <NavLink to ="/data/2323">Show-Data</NavLink>
          </li>

          <li className='py-3 mt-3 bg-indigo-300 text-center rounded  hover:bg-indigo-900'>
          <a className='cursor-pointer'
           to ="/data/23283"
           onClick={()=>{
            SetIsAuthenticated(!isAuthenticated);
           }}
           >{isAuthenticated ? " Logout " : " Login "}
           </a >
          </li>
      </ul>
      </div>
      
      {/* child menu  */}
      <div className=' w-full  '>
      <Outlet/>
      </div>
    </div>
  )
}

export default Root;
