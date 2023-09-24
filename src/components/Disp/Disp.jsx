import React from 'react';
import Lister from './Lister';

const Disp = (props) => {

  return (
    <>
      {props.data.map(list=>(
        <Lister key={list.id} id={list.id} text={list.text} onDelete={props.onDeleteClick}/>
      ))}
    </>
  )
}

export default Disp