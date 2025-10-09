import { createSlice } from '@reduxjs/toolkit';

const fakeCredentials = {
	name: 'Ananya Iyer',
	email: 'ananya.iyer95@ai.com',
	password: '123456',
	address:
		'Apartment No. 1203, Tower 5, Prestige Lakeside Habitat, Varthur Main Road, Opposite Forum Value Mall, Whitefield, Bengaluru, Karnataka - 560066, India',
};

const initialState = {
	user: null,
	isAuthenticated: false,
	error: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			const { email, password } = action.payload;

			if (
				email.trim() === fakeCredentials.email &&
				password.trim() === fakeCredentials.password
			) {
				state.user = {
					name: fakeCredentials.name,
					email: fakeCredentials.email,
					address: fakeCredentials.address,
				};
				state.isAuthenticated = true;
				state.error = null;
			} else {
				state.error = 'Invalid Credentials';
			}
		},
		logout: state => {
			state.user = null;
			state.isAuthenticated = false;
			state.error = null;
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
