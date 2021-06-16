import React from 'react';

import './AlertStyle.css';

const AlertMsg = ({ message }) => (
    <div className='alertmsg'>
        <p className='msg'>{message}</p>  
    </div>
      
);


export default AlertMsg;


