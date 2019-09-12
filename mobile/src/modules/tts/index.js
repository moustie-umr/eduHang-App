import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './welcome';
import Read from './read';
import Add from './add';


const MainStack = createStackNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
                title: '',
        },
    },
    Read: {
        screen: Read,
        navigationOptions: {
                title: '',
        },
    },
    Add: {
        screen: Add,
        navigationOptions: {
                title: '',
        },
    }
}, {
        mode: 'screen',
        initialRouteName: "Home",
});

export default MainStack;