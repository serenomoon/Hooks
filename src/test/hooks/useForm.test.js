import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Test "useForm"', () => {
    
    const initialState = {
        name: 'Saulo',
        email: 'saulo@gmail.com'
    };

    test('should return default form', () => {
        
        const { result } = renderHook( () => useForm(initialState) )

        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual(initialState);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');

    });

    test('should change form name', () => {
        
        const { result } = renderHook( () => useForm(initialState) )

        const [ , handleInputChange ] = result.current;

        act( ()=> {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Carlos'
                }
            });
        });

        const [ formValues ] = result.current;

        expect( formValues ).toEqual( { ...initialState, name : 'Carlos' } );

    });

    test('should reset to default value', () => {
        
        const { result } = renderHook( () => useForm(initialState) )

        const [ , handleInputChange, reset ] = result.current;

        act( ()=> {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Carlos'
                }
            });

            reset();
        });

        const [ formValues ] = result.current;

        expect( formValues ).toBe(initialState);

    });

});