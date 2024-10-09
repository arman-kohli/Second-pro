import React, { useEffect, useState } from 'react'

const Samosa = () => {

    const[active,setActive] =useState(false);
    const[count ,setCount]=useState(0);

    // useEffect ( callbackfunction , array of dependency)
   // [] : empty array means it will run only once when coponents mounts
   // [active,active2] : if we pass any values in the depencecdy arryay 
   // it we re-run every time that values changes
    useEffect(()=>{
        console.log("samosa created");
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
      // clearn up code 
      return () =>{
        console.log("samosa destroyed");
      }
    },
    [active,count]
);
  return (
    <div className='p-10 flex flex-col justify-center items-center'>
      <h1>Lets Eat samosa : </h1>
      <p>i like to eat samosh</p>
      <div>
        <button onClick={()=>{
            setActive(!active);
        }}
         className='rounded bg-indigo-200'>Get</button>
         <button className='px-2 gap-2 py-2 rounded bg-red-400'   onClick={() =>{
            setCount(count+1);
         }}>
           {count}
         </button>
      </div>
          <h1 className='text-4xl'>{active ? " Active" :" InActive"}</h1>
    </div>
  )
}

export default Samosa
