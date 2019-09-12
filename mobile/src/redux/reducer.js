import { combineReducers } from 'redux'
import TtsStateReducer from '../modules/tts/store';
import AuthStateReducer from '../modules/auth/store';
import MainStateReducer from '../modules/main/store';

export default combineReducers({
	TtsStateReducer,
	AuthStateReducer,
	MainStateReducer
})