import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');

describe('Test "MultipleCustomHooks.js"', () => {
    
    beforeEach( () =>  {
 
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
 
    });

    test('should show correct snapshot', () => {
       
        useFetch.mockReturnValue({
            data: null,
            loading:true,
            error:null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('should return correct info', () => {
       
        useFetch.mockReturnValue({
            data: [{
                author: 'Saulo',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola Mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Saulo' );

    });

});