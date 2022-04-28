import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Test "todoReducer.js" ', () => {

    test('should return default state', () => {
        
        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos );

    });

    test('should add todo to the state and keep the default value as well', () => {
        
        const demoAddTodo = {
            id: 3,
            desc: 'addTodo',
            done: false
        }

        const action = {
            type: 'add',
            payload: demoAddTodo
        }
        

        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, demoAddTodo ] );

    });

    test('should remove a TODO', () => {
        
        
        const action = {
            type: 'delete',
            payload: 2
        }
        
        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[0] ] );

    });

    test('should do the TODOS TOGGLE', () => {
        
        
        const action = {
            type: 'toggle',
            payload: 1
        }
        
        const state = todoReducer( demoTodos, action );

        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] );

    });
    
    
});