import React,{Component} from 'react';
import Todos from './todos'
import Addform from './addform'

class app extends(Component) {
  state={
    todos:[
      {id:1,  content: 'buy some milk'},
      {id:2, content:"play COD"},
      {id:4, content:"learn react and node"}   
    ]
  }

  deletetodo=(idd) =>{
       const filteredarray=this.state.todos.filter( todo=>{
         return todo.id !== idd
       })
  this.setState({
    todos:filteredarray
  })
}

  addtodo=(passed_todo)=>{
    passed_todo.id=Math.random();
    let updated_todos=[...this.state.todos,passed_todo]
    this.setState({
      todos: updated_todos
    })    
  }
  render (){
  return(
    <div className="todoapp container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos deletetodo={this.deletetodo}  todos={this.state.todos} />
      <Addform addtodo={this.addtodo}/>
    </div>
  );
} 
}

export default app;
