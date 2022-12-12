import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "services/auth";

export interface AuthState {
	user?: any;
	authRequired: boolean;
}

const initialState: AuthState = {
	user: undefined,
	authRequired: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<any>) => {
			state.user = action.payload;
		},
		requireAuth: (state, action: PayloadAction<boolean>) => {
			state.authRequired = action.payload;
		},
	},
});

export const { setUser, requireAuth } = authSlice.actions;

export default authSlice.reducer;

export const loadUser = (): any => async (dispatch: any) => {
	try {
		const { data } = await fetchUser();
		dispatch(setUser(data));
	} catch (err) {
		dispatch(setUser(null));
		return;
	}
};
