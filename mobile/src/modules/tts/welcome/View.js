import React, { Component } from 'react';
import CONSTANTS from 'src/App.constants';
import { Button, Container, Content, Icon, ProgressBar, Text, Toast, View } from 'native-base';

const styles = {
	headerBar:{
		elevation: 0,
    	shadowOpacity: 0 ,
    	backgroundColor: CONSTANTS.COLORS.PRIMARY
	},

	headerIcon:{
		marginHorizontal: 20,
	},

	highlight: {
		padding: 20,
		backgroundColor: CONSTANTS.COLORS.PRIMARY
	}
}

class Home extends Component {

	state = {
		loading: false,
		active: true,
	};

	static navigationOptions = {
		headerTintColor: "#fff",
		headerStyle: styles.headerBar,
		headerLeft: <Icon style={styles.headerIcon} name="menu" color="#fff"  size={20} />,
		headerRight: <Icon style={styles.headerIcon} name="search" color="#fff"  size={20} />,
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

	render() {
		return (
			<Container>
				<Content>
					<View style={styles.highlight}>
						
						<View>
							<View>
								<Button transparent primary>
						            <Icon name="play" />
						        </Button>
							</View>

							<View>
								<Text>title</Text>
								<View>
									<ProgressBar progress={10} />
								</View>
							</View>

							<Button transparent primary>
					            <Icon name="play" />
					        </Button>
						</View>

					</View>

					<Fab
			            active={this.state.active}
			            direction="up"
			            containerStyle={{ }}
			            style={{ backgroundColor: '#5067FF' }}
			            position="bottomRight"
			            onPress={() => this.setState({ active: !this.state.active })}>
			            <Icon name="share" />
			            <Button style={{ backgroundColor: '#34A34F' }}>
			              <Icon name="logo-whatsapp" />
			            </Button>
			            <Button style={{ backgroundColor: '#3B5998' }}>
			              <Icon name="logo-facebook" />
			            </Button>
			            <Button disabled style={{ backgroundColor: '#DD5144' }}>
			              <Icon name="mail" />
			            </Button>
			        </Fab>
				</Content>
			</Container>
		);
	}
}

export default Home;