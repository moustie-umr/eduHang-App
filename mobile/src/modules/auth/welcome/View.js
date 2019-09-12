import React, { Component } from 'react';
import CONSTANTS from 'src/App.constants';
import { Image } from 'react-native';
import { Divider } from 'src/components';
import { Button, Container, Content, Text, View } from 'native-base';

const styles = {
	content: {
		flex: 1
	},

	info: {
		flex: .8
	},

	infoHeader: {
		height: 270,
		paddingBottom: 10,
		flexDirection: 'column',
		justifyContent: 'flex-end',
        alignItems: 'center',
	},

	infoFooter: {
		padding: 20
	},

	infoTitle: {
		marginTop: 10,
		fontSize: 21,
	},

	infoDes: {
		fontSize: 15,
		color: '#6e6e6e',
		marginBottom: 10
	},

	infoDivider: {
		width: 30,
	},

	buttons: {
		flex: .2,
		padding: 20
	},

	buttonRegister: {

	},

	buttonLogin: {

	}
	
}

class Welcome extends Component {

	state = {
	    loading: false
	};

	handleLoading = () => {
        this.setState(previousState => {
            return { verifying: !previousState.verifying };
        });
    }

    onButtonPress = (type) => {
		if(this.state.loading)
			return;

		this.handleLoading();
        this.props.navigation.navigate(type);
    }

	render() {
		return (
			<Container>
				<Content contentContainerStyle={styles.content}>
					<View style={styles.info}>

						<View style={styles.infoHeader}>
			    		
							<Text> IMG HERE </Text>
			    		</View>

			    		<View style={styles.infoFooter}>
			    			<View>
			    				<Text style={styles.infoTitle}>Welcome</Text>
			    				<Text style={styles.infoDes}>Lorem ipsum dolor sit amet, consectetur cing elit, sed do tempor incididunt ut mila aliqua.</Text>
			    			</View>

			    			<Divider style={styles.infoDivider} color="#3F51B5" />
			    		</View>
					</View>
					<View style={styles.buttons}>
						<Button primary block rounded onPress={ () => this.onButtonPress('Register') }>
							<Text> SIGN UP </Text>
						</Button>
						<Button primary block transparent onPress={ () => this.onButtonPress('Login') }>
							<Text>LOGIN </Text>
						</Button>
					</View>
		        </Content>
		    </Container>
		);
	}
}

export default Welcome;