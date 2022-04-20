import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { HookApp } from '../HookApp';

describe('Test "HookApp.js"', () => {


    test('should show correctly snapshot', () => {

        const wrapper = shallow( <HookApp /> );

        expect(wrapper).toMatchSnapshot();
        
    });
} )