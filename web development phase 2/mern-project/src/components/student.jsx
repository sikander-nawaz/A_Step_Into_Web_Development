import React, { useState } from 'react'

const Student = ({name,course, sendMessage}) => {
   


  return (
    <div>
        student list
        <ul className='m-10 '>
            <p> {name}</p>
            <p>{course}</p>
        </ul>

        <button onClick={()=>sendMessage("hello from child")} >send message button</button>

    
        
    </div>
  )
}

export default Student