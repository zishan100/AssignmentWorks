import React, { Component } from 'react';
import List from '../List/list';
import Button from '../ButtonCom/button';
import './todotaskStyle.css';
class TodoTask extends Component{


    render() {
        const { item,handleEdit,handleDelete,ClearList} = this.props;
        return (
        <div className='todoTask'>
          <h4 className='task-heading'>ToDo List
         </h4>
            
         <div className='render-list'>
          
          {
          item.map(({id,title })=> 
              <List
                  key={id} title={title}
                  handleEdit={() => handleEdit(id)
                  }
              handleDelete={() => {
                     handleDelete(id);
                     console.log(" This Delete Method Called")
                  }}
                 />)               
         } 
          </div>       
       <div className='container'>
                    <Button color='color' type='submit' value='Clear List' ClearList={ClearList}/>        
       </div>
              
     </div> 
        ); 
      
    }


}

export default TodoTask;

