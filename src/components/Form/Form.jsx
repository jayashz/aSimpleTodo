
import React, { useState } from 'react'

const Form = (props) => {


    const [input,setInput] = useState('');
    const clickHandler=(event)=>{
        event.preventDefault();
       props.onSubmission(input);
       setInput('');
    };
    const changeHandler=(event)=>{
      if(event.target.value.trim().length>0){
          setInput(event.target.value);
      }
      
    };

  return (
         <form onSubmit={clickHandler} className='h-70 border w-1/2 flex  justify-between my-8 p-8 gap-4 border-black rounded'>
          <input type="text" onChange={changeHandler} value={input} className='w-full border-2 border-black focus:outline-none' />
          <button type='submit' className='px-4 py-1 text-4xl border-2 border-black rounded-full bg-green-500 ' >+</button>
        </form>
  )
}

export default Form;