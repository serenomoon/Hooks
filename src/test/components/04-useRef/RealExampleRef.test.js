import React, { useState } from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from "@testing-library/react-hooks";
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';



describe('Test "RealExamplesRef.js" ', () => {
    
    test('should show correct snapshot', () => {
        
        const wrapper = shallow( <RealExampleRef /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
    });

    test('should show "<MultipleCustomHooks />" component', () => {
        

        const wrapper = shallow( <RealExampleRef /> );

        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    });

});