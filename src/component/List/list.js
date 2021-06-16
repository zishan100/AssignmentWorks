import React from 'react';


import './listStyle.css';


const List = ({title,handleEdit,handleDelete}) => {
    
   return (
       <div className='list-item'>
         <p>{title}</p>
         
        <div className='button-container'>
        <button type='button'  className='edit' onClick={handleEdit}>Edit</button>
            <button type='button' className='delete'
             onClick={handleDelete}
            >Delete</button>    
        </div>
       
       </div>

    );


}

export default List;