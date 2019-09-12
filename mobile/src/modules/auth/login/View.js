import React, { Component } from 'react';
import { Auth } from 'src/providers';
import CONSTANTS from 'src/App.constants';
import { AsyncStorage, Image } from 'react-native';
import { isEmpty } from 'src/utils';
import { Divider } from 'src/components';
import { TextDivider } from './components';
import { Button, Container, Content, Form, Icon, Input, Item, Label, Text, Toast, View } from 'native-base';

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

	forgot:{
		fontSize: 16,
		paddingTop: 15,
		paddingBottom: 25,
		color: '#7e7e7e',
		textAlign: 'right', 
		alignSelf: 'stretch'
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


class Register extends Component {

	state = {
		email: 'ola_leykan@yahoo.com',
		password: '1234567890',
	    loading: false
	};

	static navigationOptions = {
		headerStyle: styles.headerBar,
	};

	componentDidMount(){
	}

	handleLoading = () => {

        this.setState(previousState => {
            return {
                loading: !previousState.loading
            };
        });
    }

    onSubmit = async () => {
    	if (this.state.loading)
            return;

        this.handleLoading();

        var items = {
            email: this.state.email,
            password: this.state.password
        }

        try{
        	var res = await Auth.login(items);

            console.log(res);

            if (isEmpty(res.success) || isEmpty(res.data)) {

                throw new Error('email or password incorrect');
            }

            await AsyncStorage.setItem(CONSTANTS.CONFIG.JWT_KEY, JSON.stringify(res.data));
            
            this.handleLoading();

            this.props.navigation.navigate('Main');
            
        }catch(err){
            console.log(err);
            Toast.show({
                text: err.message || "email or password incorrect!",
                buttonText: "Okay"
            });
            this.handleLoading();
        }
    }

	render() {

		return (
			<Container>
				<Content padder style={{backgroundColor: "#FEFEFE"}}>
					<View style={styles.title}>
						<Text style={styles.titleText}> Login </Text>
						<Divider style={styles.titleDivider} color={CONSTANTS.COLORS.PRIMARY} />
					</View>


					<Form style={styles.form}>
						<Item floatingLabel>
							<Label>Username or Email</Label>
							<Input 
								onChangeText={(email) => this.setState({email})}
		                        value={this.state.email}
	                        />
			            </Item>
			            <Item floatingLabel last>
							<Label>Password</Label>
							<Input  
								onChangeText={(password) => this.setState({password})}
		                        value={this.state.password}
	                        />
			            </Item>
			        </Form>

					<View style={{paddingHorizontal: 10}}>

						<Text style={styles.forgot}> forgot password? </Text>
					
				        <Button light block rounded disabled={this.state.loading} onPress={ this.onSubmit }>
							<Text> LOGIN </Text>
						</Button>

						<TextDivider text="or connect with" style={{marginTop: 15, paddingHorizontal: 10}} />

						<View style={styles.social}>
							<Button danger block rounded style={styles.socialButton}>
								<Icon name='google' type="FontAwesome" />
								<Text> google+ </Text>
							</Button>

							<Button primary block rounded style={styles.socialButton} onPress={ this.onSubmit }>
								<Icon name='facebook' type="FontAwesome" />
								<Text> facebook </Text>
							</Button>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Register;