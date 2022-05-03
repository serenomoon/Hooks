import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('test <TodoAdd />', () => { 

    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
    <TodoAdd 
        handleAddTodo = { handleAddTodo }
    /> );

    test('should show match snapshot', () => {
    
        expect( wrapper ).toMatchSnapshot();

    });

    test('should not call handleAddTodo', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    });

    test('should call handleAddTodo', () => {
        
        const value = 'Lear React';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        //testing reset();
        expect( wrapper.find('input').prop('value') ).toBe('');

    });
 })
