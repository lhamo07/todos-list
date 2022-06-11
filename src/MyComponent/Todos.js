import React from 'react'
import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 class="text-center my-3">Todos List</h3>
           {props.todos.map((todo)=>{
               return  <TodoItems todo={todo}/>
           })}
          
           
        </div>
    )
}
