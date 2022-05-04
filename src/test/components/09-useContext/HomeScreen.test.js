import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Test <HomeScreen />', () => {
    
    const user = {
        user: 'Saulo',
        email: 'saulo@email.com'
    }

    const wrapper = mount(
    <UserContext.Provider value = {{
        user
    }}>
        <HomeScreen />
    </UserContext.Provider>
    );

    test('should show snapshot correctly', () => {


        expect( wrapper ).toMatchSnapshot();

     })

});
