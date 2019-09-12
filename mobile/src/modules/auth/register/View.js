import React, { Component } from 'react';
import { isEmpty } from 'src/utils';
import { Auth } from 'src/providers';
import CONSTANTS from 'src/App.constants';
import { AsyncStorage, Image } from 'react-native';
import { Button, Container, Content, Form, Input, Item, Label, Text, Toast, View } from 'native-base';

const styles = {
	headerBar:{
		elevation: 0,
    	shadowOpacity: 0  
	},

	title:{
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 10,
		fontSize: 21,
		fontWeight: 'bold'
	},

	form: {
		marginTop: 0,
		paddingTop: 5,
		marginBottom: 40
	},

	login: {
		marginTop: 5,
		justifyContent: 'center',
        alignItems: 'center',
	},

	loginText:{
		fontSize: 16,
		paddingTop: 10,
		paddingBottom: 10,
		color: '#7e7e7e',
	},

	loginLink:{
		color: '#000',
		fontWeight: 'bold'
	}
}


class Register extends Component {

	state = {
		first_name: 'frodo',
		last_name: 'baggins',
		username: 'frodox',
		email: 'frodo@shire.com',
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
        	first_name: this.state.first_name,
			last_name: this.state.last_name,
			username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        try{
        	var res = await Auth.register(items);

            console.log(res);

            if (isEmpty(res.success) || isEmpty(res.data)) {

                throw new Error(res.error.message || res.error.details);
            }

            await AsyncStorage.setItem(CONSTANTS.CONFIG.JWT_KEY, JSON.stringify(res.data));
            
            this.handleLoading();

            this.props.navigation.navigate('Main');
            
        }catch(err){
            console.log(err);
            Toast.show({
                text: err.message || "unable to sign up!",
                buttonText: "Okay"
            });
            this.handleLoading();
        }
    }

	render() {
		return (
			<Container>
				<Content padder>
					<Text style={styles.title}> SIGN UP </Text>

					<View>
						<Form style={styles.form}>
							<Item floatingLabel>
								<Label>First Name</Label>
								<Input 
									onChangeText={(first_name) => this.setState({first_name})}
			                        value={this.state.first_name}
		                        />
				            </Item>
				            <Item floatingLabel>
								<Label>Last Name</Label>
								<Input  
									onChangeText={(last_name) => this.setState({last_name})}
			                        value={this.state.last_name}
		                        />
				            </Item>
				            <Item floatingLabel>
								<Label>Username</Label>
								<Input  
									onChangeText={(username) => this.setState({username})}
			                        value={this.state.username}
		                        />
				            </Item>
				            <Item floatingLabel>
								<Label>Email</Label>
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


				        <Button primary block rounded disabled={this.state.loading} onPress={this.onSubmit}>
							<Text> SIGN UP </Text>
						</Button>

						<View style={styles.login}>
							<Text style={styles.loginText} onPress={() => this.props.navigation.navigate('Login')}> 
								Already have an account? 
								<Text style={styles.loginLink}> LOG IN </Text> 
							</Text> 
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Register;