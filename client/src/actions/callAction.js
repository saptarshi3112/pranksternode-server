import axios from 'axios';
import {
	CALL_USER
} from './types';

export const callUser = Number => dispatch => {
	axios.get(`/userRouter/${Number}`, {
		headers: {'Content-Type': 'application/json'}
	})
	.then(res => {
		console.log(res);
		dispatch({
			type: CALL_USER,
		});
	})
	.catch(err => {
		console.error(err);
	})
};
