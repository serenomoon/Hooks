
//toma el estado del objeto en este caso y la accion
export const todoReducer = ( state= [] , action ) => {
  
    switch (action.type) {
        case 'add':
            return [ ...state, action.payload ];

        //filtra para que conserve todos los objetos que tengan un id diferente al seleccionado
        case 'delete':
            return state.filter( todo => todo.id !== action.payload );


        //codigo mejorado del toggle
        case 'toggle':
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? {...todo, done: !todo.done}
                    : todo    
            );

        case 'toggle-old':
            return state.map( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            });
    
        default:
            return state;
    }

}
