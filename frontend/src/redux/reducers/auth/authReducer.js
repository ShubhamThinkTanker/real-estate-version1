import {
	FORGOTPASSWORD_USER_ERROR,
	FORGOTPASSWORD_USER_REQUEST,
	FORGOTPASSWORD_USER_RESET,
	FORGOTPASSWORD_USER_SUCCESS,
	LOGIN_USER_ERROR,
	LOGIN_USER_REQUEST,
	LOGIN_USER_RESET,
	LOGIN_USER_SUCCESS,
	RESETPASSWORD_USER_ERROR,
	RESETPASSWORD_USER_REQUEST,
	RESETPASSWORD_USER_RESET,
	RESETPASSWORD_USER_RESETPASSWORD,
	RESETPASSWORD_USER_SUCCESS,
	UPDATE_PROFILE_ERROR,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_RESET,
	UPDATE_PROFILE_SUCCESS,
} from '../../Constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_USER_REQUEST:
			return { loading: true };
		case LOGIN_USER_SUCCESS:
			return { loading: false, loginUserData: action.payload };
		case LOGIN_USER_ERROR:
			return { loading: false, error: action.payload };
		case LOGIN_USER_RESET:
			return {};
		default:
			return state;
	}
};

export const ProfileUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_PROFILE_REQUEST:
			return { loading: true };
		case UPDATE_PROFILE_SUCCESS:
			return { loading: false, getResetPasswordUserData: action.payload };
		case UPDATE_PROFILE_ERROR:
			return { loading: false, error: action.payload };
		case UPDATE_PROFILE_RESET:
			return {};
		default:
			return state;
	}
};

export const UserForgotPasswordReducer = (state = {}, action) => {
	switch (action.type) {
		case FORGOTPASSWORD_USER_REQUEST:
			return { loading: true };
		case FORGOTPASSWORD_USER_SUCCESS:
			return {
				loading: false,
				getForgotPasswordUserData: action.payload,
			};
		case FORGOTPASSWORD_USER_ERROR:
			return { loading: false, error: action.payload };
		case FORGOTPASSWORD_USER_RESET:
			return {};
		default:
			return state;
	}
};

export const ResetForgotPasswordReducer = (state = {}, action) => {
	switch (action.type) {
		case RESETPASSWORD_USER_REQUEST:
			return { loading: true };
		case RESETPASSWORD_USER_SUCCESS:
			return { loading: false, getResetPasswordUserData: action.payload };
		case RESETPASSWORD_USER_ERROR:
			return { loading: false, error: action.payload };
		case RESETPASSWORD_USER_RESET:
			return {};
		default:
			return state;
	}
};
