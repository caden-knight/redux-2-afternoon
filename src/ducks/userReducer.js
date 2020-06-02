import axios from 'axios';

const initialState = {
	email: null,
	firstName: null,
	lastName: null
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

//action function should always return an object
export const requestUserData = () => {
	let data = axios.get('/auth/user-data').then((res) => res.data);

	return {
		type: REQUEST_USER_DATA,
		payload: data
	};
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_USER_DATA + '_FULFILLED':
			const { firstName, lastName, email } = action.payload.user;
			return { firstName, lastName, email };
		default:
			return state;
	}
}
