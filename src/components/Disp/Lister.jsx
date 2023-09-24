import React, { useState } from 'react'

const Lister = (props) => { 
    const [isDeleteble,setDel]=useState(false);
    const checkHandler=(event)=>{
        setDel(event.target.checked);
    };
    const deleteHandler=()=>{
        if(isDeleteble){

            props.onDelete(props.id);
        };
    };
  return (
    <div className=' border w-1/2 px-5 mb-8 rounded-lg flex gap-5 text-xl items-center p-2 relative'>
            <input type="checkbox" onChange={checkHandler} className='h-6 w-6' />
            <div className='flex '> {props.text}</div>
            <button onClick={deleteHandler} className='p-2 bg-blue-500 rounded-lg absolute right-0'>Delete</button>
    </div>
  )
}

export default Lister