import React, { Component } from 'react';
import CONSTANTS from 'src/App.constants';
import Tts from 'react-native-tts';
import { isEmpty } from 'src/utils';
import { Divider } from 'src/components';
import { Button, Container, Content, Form, Textarea, Icon, Input, Item, Label, Text, Toast, View } from 'native-base';

const styles = {
	headerBar:{
		elevation: 0,
    	shadowOpacity: 0  
	},

	title:{
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 50,
	},

	titleText:{
		fontSize: 21,
		fontWeight: 'bold'
	},

	titleDivider: {
		width: 30,
		marginLeft: 5,
		marginTop: 15
	},

	form: {
		marginTop: 0,
		marginLeft: 0,
		marginRight: 10,
		marginBottom: 10,
		paddingHorizontal: 0
	},

	social: {
		marginTop: 10,
		flexDirection: 'row',
        alignItems: 'center',
		justifyContent: 'space-between',
	},

	socialButton: {
		flex: .48
	},
}

class Home extends Component {

	state = {
		loading: false,
		toSpeak: "hey darling, how i miss you"
	};

	static navigationOptions = {
		title: 'Home',
	};

	componentWillMount() {
    }


	componentDidMount() {
	}

	handleLoading = () => {
        this.setState(previousState => {
            return { verifying: !previousState.verifying };
        });
    }


    onPlay = async () => {
    	if (this.state.loading)
            return;

        if(isEmpty(this.state.toSpeak)){
        	Toast.show({
                text: "please enter your password!",
                buttonText: "Okay"
            });
        	return;
        }

        this.handleLoading();

        Tts.getInitStatus().then(() => {
		   Tts.speak(this.state.toSpeak);
		});

        this.handleLoading();
    }

    onStop = async () => {
    	if (!this.state.loading){
        	Toast.show({
                text: "sound must be playing",
                buttonText: "Okay"
            });
        	return;
        }

        Tts.stop();
    }

	render() {
		return (
			<Container>
				<Content padder style={{backgroundColor: "#FEFEFE"}}>

					<View style={styles.title}>
						<Text style={styles.titleText}> Read out(DEMO) </Text>
						<Divider style={styles.titleDivider} color={CONSTANTS.COLORS.PRIMARY} />
					</View>

					<Form style={styles.form}>
			            <Textarea rowSpan={5} bordered placeholder="Enter Text" value={this.state.toSpeak} onChangeText={(toSpeak) => this.setState({toSpeak})} />
			        </Form>

			        <View style={styles.social}>
			        	<Button danger block rounded style={styles.socialButton} onPress={ this.onPlay }>
							<Icon name='play'/>
							<Text> Play </Text>
						</Button>

						<Button primary block rounded style={styles.socialButton} onPress={ this.onStop }>
							<Icon name='pause'/>
							<Text> Stop </Text>
						</Button>
			        </View>
				</Content>
			</Container>
		);
	}
}

export default Home;