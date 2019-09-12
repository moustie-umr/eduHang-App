import CONSTANTS from 'src/App.constants';

//initial state
const initialState = {
	first_name: '',
	last_name: '',
	email: '',
	username: '',
	phone: ''
};

//actions
export const createUser = (payload) => {
    return {
        type: CONSTANTS.ACTIONS.CREATE_USER,
        payload: payload,
    };
};


//reducer
const TtsStateReducer = (state = initialState, action) => {
  switch(action.type) {

  	case CONSTANTS.ACTIONS.CREATE_USER : 
      return {
        ...state,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        username: action.payload.username,
        phone: action.payload.phone,
        email: action.payload.email,
      }

    default:
      return state
  }
}

export default TtsStateReducer;