import axios from 'axios';
import { configHeader } from '../../../localstorage/localdata';
import { toast } from 'react-toastify';
import '../../.././index.css';
import {
	COMPLEX_CREATE_ERROR,
	COMPLEX_CREATE_REQUEST,
	COMPLEX_CREATE_SUCCESS,
	COMPLEX_GET_ERROR,
	COMPLEX_GET_REQUEST,
	COMPLEX_GET_SUCCESS,
	COMPLEX_LIST_ERROR,
	COMPLEX_LIST_REQUEST,
	COMPLEX_LIST_SUCCESS,
	COMPLEX_EDIT_REQUEST,
	COMPLEX_EDIT_ERROR,
	COMPLEX_EDIT_SUCCESS,
	COMPLEX_EDIT_RESET,
	COMPLEX_DELETE_ERROR,
	COMPLEX_DELETE_REQUEST,
	COMPLEX_DELETE_SUCCESS,
	COMPLEX_MULTI_DELETE_REQUEST,
	COMPLEX_MULTI_DELETE_SUCCESS,
	COMPLEX_MULTI_DELETE_ERROR,
	COMPLEX_MULTI_DELETE_RESET,
	COMPLEX_DELETE_RESET,
} from '../../Constants/userConstants';

export const ComplexListAction = (queryString) => async (dispatch) => {
	try {
		dispatch({
			type: COMPLEX_LIST_REQUEST,
		});

		const { data } = await axios.get(
			'/realestate/find?' + queryString,
			configHeader
		);

		dispatch({
			type: COMPLEX_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: COMPLEX_LIST_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const ComplexGetAction = (complexid) => async (dispatch) => {
	try {
		dispatch({
			type: COMPLEX_GET_REQUEST,
		});
		const { data } = await axios.get(
			`/realestate/findid/${complexid}`,
			configHeader
		);

		dispatch({
			type: COMPLEX_GET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: COMPLEX_GET_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const ComplexCreateAction = (realestateData) => async (dispatch) => {
	try {
		dispatch({
			type: COMPLEX_CREATE_REQUEST,
		});

		const { data } = await axios.post(
			`/realestate/add`,
			realestateData,
			configHeader
		);

		dispatch({
			type: COMPLEX_CREATE_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.success('Realestate Created Successfully');
		}
	} catch (error) {
		dispatch({
			type: COMPLEX_CREATE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const EditComplexAction =
	(updateid, complexdata) => async (dispatch) => {
		try {
			dispatch({
				type: COMPLEX_EDIT_REQUEST,
			});

			const { data } = await axios.put(
				`/realestate/update/${updateid}`,
				complexdata,
				{
					configHeader,
				}
			);

			dispatch({
				type: COMPLEX_EDIT_SUCCESS,
				payload: data,
			});
			if (data) {
				toast.success('Realestate Updated Successfully');
			}
			dispatch({ type: COMPLEX_EDIT_RESET });
		} catch (error) {
			dispatch({
				type: COMPLEX_EDIT_ERROR,
				payload:
					error.response && error.response.data.errors
						? error.response.data.errors
						: error.message,
			});
		}
	};
export const ComplexDeleteAction = (deleteid) => async (dispatch) => {
	try {
		dispatch({
			type: COMPLEX_DELETE_REQUEST,
		});

		const { data } = await axios.delete(
			`/realestate/delete/${deleteid}`,
			configHeader
		);

		dispatch({
			type: COMPLEX_DELETE_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.error('Realestate Deleted Successfully');
		}
		dispatch({ type: COMPLEX_DELETE_RESET });
		dispatch(ComplexListAction());
	} catch (error) {
		dispatch({
			type: COMPLEX_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const ComplexMultiAction = (multiid) => async (dispatch) => {
	try {
		dispatch({
			type: COMPLEX_MULTI_DELETE_REQUEST,
		});

		const { data } = await axios.post(`/realestate/delete_many/`, multiid);

		dispatch({
			type: COMPLEX_MULTI_DELETE_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.error('Realestate Deleted Successfully');
		}
		dispatch({ type: COMPLEX_MULTI_DELETE_RESET });
		dispatch(ComplexListAction());
		setDeletedRow([]);
	} catch (error) {
		dispatch({
			type: COMPLEX_MULTI_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};
