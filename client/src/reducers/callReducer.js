import {
	CALL_USER
} from '../actions/types';

const initialState = {
	message: ''
};

export const callReducer = (state=initialState, action) => {
	switch(action.type) {
		case (CALL_USER): {
			return {
				...state,
				message: 'Called User'
			};
		}
		default:
			return state;
	}
};
