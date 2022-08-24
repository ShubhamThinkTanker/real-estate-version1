import axios from 'axios';
import { configHeader, userdatas } from '../../../localstorage/localdata';
import { toast } from 'react-toastify';
import '../../.././index.css';
import {
	MULTI_DELETE_ERROR,
	MULTI_DELETE_REQUEST,
	MULTI_DELETE_SUCCESS,
	USER_DELETE_ERROR,
	USER_DELETE_REQUEST,
	USER_DELETE_RESET,
	USER_DELETE_SUCCESS,
	USER_EDIT_ERROR,
	USER_EDIT_REQUEST,
	USER_EDIT_SUCCESS,
	USER_EDIT_RESET,
	USER_GET_ERROR,
	USER_GET_REQUEST,
	USER_GET_SUCCESS,
	USER_LIST_ERROR,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_REGISTER_ERROR,
	USER_REGISTER_REQUEST,
	USER_REGISTER_RESET,
	USER_REGISTER_SUCCESS,
	MULTI_DELETE_RESET,
} from '../../Constants/userConstants';

export const UserRegisterAction = (registerdata) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		});

		const { data } = await axios.post(
			`/api/user_register/`,
			registerdata,
			configHeader
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		if (data) {
			toast.success('User Created Successfully');
		}
		dispatch({ type: USER_REGISTER_RESET });
	} catch (error) {
		dispatch({
			type: USER_REGISTER_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const EditRegisterAction = (updateid, userdata) => async (dispatch) => {
	try {
		dispatch({
			type: USER_EDIT_REQUEST,
		});

		const { data } = await axios.put(`/api/update/${updateid}`, userdata, {
			configHeader,
		});

		dispatch({
			type: USER_EDIT_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.success('User Updated Successfully');
		}
		dispatch({ type: USER_EDIT_RESET });
	} catch (error) {
		dispatch({
			type: USER_EDIT_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const UserDeleteAction = (deleteid) => async (dispatch) => {
	try {
		dispatch({
			type: USER_DELETE_REQUEST,
		});

		const { data } = await axios.delete(
			`/api/delete/${deleteid}`,
			configHeader
		);

		dispatch({
			type: USER_DELETE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const MultiDeleteAction = (multiid) => async (dispatch) => {
	try {
		dispatch({
			type: MULTI_DELETE_REQUEST,
		});

		const { data } = await axios.post(
			`/api/delete_many/`,
			multiid,
			configHeader
		);

		dispatch({
			type: MULTI_DELETE_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.success('User Deleted Successfully');
		}
		dispatch({ type: MULTI_DELETE_RESET });
		dispatch(UserListAction());
		setDeletedRow([]);
	} catch (error) {
		dispatch({
			type: MULTI_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const UserListAction = (queryString) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LIST_REQUEST,
		});

		const { data } = await axios.get(
			'/api/get_all_user?' + queryString,
			configHeader
		);

		dispatch({
			type: USER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_LIST_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const UserGetAction = (userid) => async (dispatch) => {
	try {
		dispatch({
			type: USER_GET_REQUEST,
		});
		const { data } = await axios.get(
			`/api/get_data/${userid}`,
			configHeader
		);

		dispatch({
			type: USER_GET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_GET_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};
