import React from 'react';

const todos =({todos, deletetodo})=>{
    const   todolist= todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{deletetodo(todo.id)}}  className="green-text">{todo.content}</span>

                </div>  
            )
        })
    ) : (
        <p className="center blue-text"> wohoo! no task left!</p>
    )
    return(
            <div className="todos collection">
                {todolist}  
            </div>
    )
}

export default todos