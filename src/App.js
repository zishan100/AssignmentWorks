import React, { Component } from "react";

import "./App.css";
import TodoInput from './component/ToDoInput/todoinput'
import TodoTask from './component/ToDoTask/todotask'
import AlertMsg from './component/AlertMsg/AlertMsg';
import { v1 as uuidv1 } from 'uuid';
/* Here is Class Based Component to Pass Data Using State Property*/
class App extends Component {
  constructor () {
    super();
    
    this.state = {
    items: [],
    item: '',
      editItem: {
        edit: false,
        id:'' 
      },
    alertMsg: false,
    message:''
  }    
  }
  
  
  componentDidMount() {
    const Items = JSON.parse(localStorage.getItem('item')) || [];
    
    this.setState({
       items:Items
    }) 
  }
     

  handleChange = (e) => {
    // console.log(e.target.value);    
    this.setState({
     item:e.target.value
   })      

  } 


  handleSubmit = (e) => {
    
    e.preventDefault();
  
    console.log('handle Submit');
    
    let Items = [];
    
    Items = JSON.parse(localStorage.getItem('item')) || [];
    if (this.state.item === '')
    {
      this.setState({
        alertMsg: true,
        message:"Empty Input Value Cannot Be Accepted!"
      }) 
      this.ShowAlert();
      return;  
    }
    if(this.state.editItem.edit === true) {
                 
      console.log(this.state.editItem);
      Items = Items.map((item) => {
          
        return item.id === this.state.editItem.id ?
          {
            title: this.state.item,
            id:item.id
          } : item;
       }) 
       this.setState({
       items:Items,
       editItem: false,
       item: "",
       alertMsg: true,
       message:'Edited New Items Successfully'
       })
        this.ShowAlert(); 
      localStorage.setItem('item', JSON.stringify(Items));  
      
      return;
    }
  
    const newItem = {
      title: this.state.item,
      id:uuidv1()
    }
    
    const updatedItem = [...Items, newItem];
    
    this.setState({
      items: updatedItem,
      editItem: false,
      item: "",
      alertMsg: true,
      message:'Added New Items Successfully'
    })
     
    this.ShowAlert(); 
     
  localStorage.setItem('item', JSON.stringify(updatedItem));
    console.log(updatedItem);
       
    
    
  }

  ShowAlert=(alertmsg)=> {
    
    setTimeout(() => {
      this.setState({
        alertMsg: false,
        message:''
      })  
    }, 3000); 

  }
  /* Delete Item  */
  handleDelete = (id) => {
    const updatedItem = this.state.items.filter(item => item.id!==id)  
    this.setState({
      items: updatedItem,
    })
    localStorage.setItem('item', JSON.stringify(updatedItem));
    
  }
  
  /* Edit Item function */
  handleEdit = (id) => {
    console.log(id);   

    const editItem = this.state.items.find(item => item.id === id)
    
    // const updatedItem = this.state.items.filter(item => item.id!==id)  
    this.setState({
      item: editItem.title,
      editItem: {
        edit: true,
        id: editItem.id
      },
    })
    // localStorage.setItem('item', JSON.stringify(updatedItem));
  }

/* Clear List */
 ClearList = () => {
     
   this.setState({
     items:[]
   })
   localStorage.removeItem('item');
}  
  
  
  render() {
    
    return (
      <div className="App">
        <h4>To Do App</h4>
        {
          this.state.alertMsg ?
            <AlertMsg  message={this.state.message} /> : null  
        }
         
        
        <TodoInput item={ this.state.item }
          handleSubmit={ this.handleSubmit } handleChange={ this.handleChange }
          editItem={this.state.editItem}
        />
        <TodoTask
          handleEdit={this.handleEdit}
          key={this.state.items.id}
          item={this.state.items}
          handleDelete={this.handleDelete}
          ClearList={this.ClearList}
         />
      </div>
    );
  }
}

export default App;
