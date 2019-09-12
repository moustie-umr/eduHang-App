import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from './welcome';
import Login from './login';
import Register from './register';

const Style = {
}

const AuthStack = ({verified = false }) => {
    return createStackNavigator ({
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                title: 'Welcome',
                header: null,
            },
        },
        Login: {
            screen: Login,
            navigationOptions: {
                title: '',
            },
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: '',
            },
        }
    }, {
            mode: 'screen',
            initialRouteName: (verified)? "Login" : "Welcome"
    });
};

export default AuthStack;