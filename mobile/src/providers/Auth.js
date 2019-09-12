import { get, post } from './Api';
import CONSTANTS from '../App.constants';


var url = CONSTANTS.API_ENDPOINT;


const Auth = {
	async ping(){
		return await get(url, true);
	},

	async login(items) {

        return await post(url+"/login", items, true);
    },

    async register(items) {

        return await post(url+"/register", items, true);
    }
};

export default Auth;