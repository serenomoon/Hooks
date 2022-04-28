import { shallow } from "enzyme";
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from "../../fixtures/demoTodos";


describe('Test <TodoListItem />', () => {
    
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow( 
    < TodoListItem 
        todo = { demoTodos[0] }
        index = { 1 }
        handleToggle = { handleToggle }
        handleDelete = { handleDelete }

    /> );

    test('should show correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should call the function handleDelete', () => {
        
        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalled();
        expect( handleDelete ).toHaveBeenCalledWith(1);

    });

    test('should call the function handleToggle', () => {
        
        wrapper.find('p').simulate('click');

        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    });

    test('should show the text correctly', () => {
        
        expect( wrapper.find('p').text().trim() ).toBe(`2. ${demoTodos[0].desc}`)

    });

    test('should have the class "complete" if TODO.done = true', () => {
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow( 
            < TodoListItem 
                todo = { todo }
            /> );

        expect(wrapper.find('p').hasClass("complete")).toBe(true);

    });
});