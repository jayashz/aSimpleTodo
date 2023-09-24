
import './App.css';
import Form from './components/Form/Form';
import Disp from './components/Disp/Disp';
import { useState } from 'react';

function App() {
  const [dataList,setList]= useState([
    {text:"This is a todo", id:'l1'},
    {text:"This must be done",id:'l2'}
  ]);
  const formHandler=(data)=>{
    setList((prevList)=>{
      const updatedList=[...prevList];
      updatedList.unshift({text:data, id:Math.random().toString()});
      return updatedList;
    });
  };

  const deleteHandler=(delId)=>{
    setList((prevList)=>{
      const updatedList= prevList.filter(item=>item.id!==delId);
      return updatedList;
    })
  };

  return (

    <div className=" w-full flex justify-center items-center flex-col ">
        <Form onSubmission={formHandler}/>

        <Disp data={dataList} onDeleteClick={deleteHandler} />

    </div>

  );
}

export default App;
