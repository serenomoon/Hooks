import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Test "useCounter.js"', () => {

    test('should return default value', () => {
        
        const { result } = renderHook( () => useCounter() )

        expect( result.current.counter ).toBe(1);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });


    test('should increment in 1', () => {
        
        const { result } = renderHook( () => useCounter(100) )

        const { increment } = result.current;

        act( () => {

            increment();

        });

        const { counter } = result.current;
        expect( counter ).toBe(101);

    });

    test('should decrement in 1', () => {
        
        const { result } = renderHook( () => useCounter(100) )

        const { decrement } = result.current;

        act( () => {

            decrement();

        });

        const { counter } = result.current;
        expect( counter ).toBe(99);

    });

    test('should reset the value to default', () => {
        
        const { result } = renderHook( () => useCounter(100) )

        const { increment } = result.current;
        const { reset } = result.current;

        act( () => {

            increment();
            reset();

        });

        const { counter } = result.current;
        expect( counter ).toBe(100);

    });
})