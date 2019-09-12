import React, { Component } from 'react';
import CONSTANTS from 'src/App.constants';
import { Button, Container, Content, Icon, Text, Toast, View } from 'native-base';

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

class Read extends Component {

	state = {
		loading: false,
	};

	static navigationOptions = {
		headerTintColor: "#fff",
		headerStyle: styles.headerBar,
		headerLeft: <Icon style={styles.headerIcon} name="menu" color="#fff"  size={20} />,
		headerRight: <Icon style={styles.headerIcon} name="more" color="#fff"  size={20} />,
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
						

					</View>
				</Content>
			</Container>
		);
	}
}

export default Read;