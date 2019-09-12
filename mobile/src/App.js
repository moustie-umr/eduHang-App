import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from "native-base";
import CONSTANTS from './App.constants';
import store from './redux/store';
import Navigation from './App.routes';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';

var jwt_decode = require('jwt-decode');

type Props = {};
export default class App extends Component < Props > {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoaded: false
        };
    }

    componentDidMount() {

        AsyncStorage.getItem(CONSTANTS.CONFIG.JWT_KEY).then((data) => {

            token = JSON.parse(data);

            if(!token){
                this.setState({ isLoggedIn: false })
                return;
            }

            var user = jwt_decode(token);
            store.dispatch({
                type: CONSTANTS.ACTIONS.CREATE_USER,
                payload: user
            });

            this.setState({ isLoggedIn: true })
        }).done(() => {
            this.setState({ isLoaded: true });
        });
    }

    renderInitialView() {

        if(!this.state.isLoaded)
            return <Loader size="large" />;

        const AppNavigation = Navigation({loggedIn: this.state.isLoggedIn, verified: false});
        return <AppNavigation />
    }

    render() {

        return (
            <Root>
                <Provider store={store}>
                  {this.renderInitialView()}
                </Provider>
            </Root>
        );
    }
}

const Loader = ({ size }) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={size || 'small'} />
        </View>        
    );
};