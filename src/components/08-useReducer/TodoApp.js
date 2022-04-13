import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './TodoApp.css';


const init = () => {
  //toma los datos almacenados en el localstorage del navegador
  return JSON.parse(localStorage.getItem('todos')) || [];
  
};


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


    useEffect(() => {
      //si 'todos' cambia, cambia los datos en el localstorage del navegador (almacena o borra)
      localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const handleAddTodo = (todoAdd) => {

      dispatch({
        type: 'add',
        payload: todoAdd
      })
    }


    const handleDelete = ( todoId ) => {

      dispatch( {
        type: 'delete',
        payload: todoId
      } );
}


    const handleToggle = ( todoId ) => {

      dispatch({
        type: 'toggle',
        payload: todoId
      })
    }

  return (
    <div>
        <h1>TodoApp ( { todos.length } ) </h1>
        <hr />

        <div className='row'>

          <div className='col-7'>

              <TodoList 
                todos= {todos}
                handleToggle= {handleToggle}
                handleDelete= {handleDelete}
              />

          </div>

          <div className='col-5'>

                <TodoAdd 
                handleAddTodo = { handleAddTodo }
                />

          </div>

        </div>    
    </div>
  )
}
