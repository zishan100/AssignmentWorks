import React from 'react';

import './buttonStyle.css';

const Button = (props) => {
    
    return (
        <div className='btn-container'>
            <button className={`${props.color} ${props.marginRight ? 'marginRight' : ''} btn`} type={props.type}
            onClick={props.ClearList}
            >
                {props.value}
                
            </button> 
          
        </div>
     
    ) 


}

export default Button; 
