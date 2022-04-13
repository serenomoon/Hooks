import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {


    //uso de custom hook
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
      });


    const handleSubmit = (e) =>{
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        };

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        //toma el objeto newTodo y lo agrega a otro, que se usara para 
        //enviar al useReducer, aclarando que es para agregar el nuevo objeto ('add').
        //lo envia al reducer.
        handleAddTodo( newTodo );

        //resetea el valor del input usando el custom hook useForm.
        reset();

    }

  return (
    <>
        <h4>Agregar ToDo</h4>
        <hr />

        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                name='description'
                className='form-control'
                placeholder='Tengo que...'
                autoComplete='off'
                value={ description }
                onChange={ handleInputChange }
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-1 btn-block'
                >
                Agregar
            </button>
        </form>
    </>
  )
}
