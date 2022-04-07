import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Comprar pan',
    done: false
}]


export const TodoApp = () => {

    const [ todo ] = useReducer(todoReducer, initialState);

    console.log(todo);

  return (
    <div>
        <h1>TodoApp</h1>
        <hr />

        <ul>
            <li>Hola Mundo</li>
            <li>Hola</li>
            <li>Mundo</li>
        </ul>    
    </div>
  )
}
