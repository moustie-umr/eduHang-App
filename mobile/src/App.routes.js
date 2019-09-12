import { createSwitchNavigator } from 'react-navigation';
import NavigationAuth from './modules/auth';
import NavigationMain from './modules/main';
import NavigationTts from './modules/tts';


export default ({verified, loggedIn }) => {
	return createSwitchNavigator(
	  {
	    Auth: NavigationAuth({verified: verified}),
	    Main: NavigationMain,
	    Tts: NavigationTts
	  },
	  {
	    initialRouteName: loggedIn? "Main" : "Auth"
	  }
	);
}