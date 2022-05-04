import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test <LoginScreen />', () => {
    
    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider> );

    test('should show snapshot correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should execute setUser with expect argument', () => { 

        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledTimes(1);
        expect( setUser ).toHaveBeenCalledWith({
            id: 123, 
            name: "Saulo"
        });
        


     })

});