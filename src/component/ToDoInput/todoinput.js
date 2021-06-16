import React,{Component} from 'react';

import './todoinputStyle.css'
import Button from '../ButtonCom/button';

class TodoInput extends Component{
   
  
  render(){
    const { handleChange, handleSubmit, item, editItem } = this.props;
    // console.log(editItem);
       return (
        <div class='todoinput'>
        <form onSubmit={handleSubmit}>
        <div class='group-input'>
                       
         <input type='text' placeholder='Add A ToDo Item' value={item} onChange={handleChange} />           
        </div>
             
        {
            editItem.edit ?
          <Button type='submit'     color='green'
              value='Edit Item' /> :
             <Button type='submit' color='green'
                   value='Add Item' />      
               
         }    
        </form>  
      </div>        
  ); 


  }

}

export default TodoInput;