import axios from 'axios';
import '../../.././index.css';
import { configHeader } from '../../../localstorage/localdata';
import {
	VENDOR_REGISTER_ERROR,
	VENDOR_REGISTER_REQUEST,
	VENDOR_REGISTER_SUCCESS,
	VENDOR_GET_ERROR,
	VENDOR_GET_REQUEST,
	VENDOR_GET_SUCCESS,
	VENDOR_LIST_ERROR,
	VENDOR_LIST_REQUEST,
	VENDOR_LIST_SUCCESS,
	VENDOR_DELETE_ERROR,
	VENDOR_DELETE_REQUEST,
	VENDOR_DELETE_SUCCESS,
	VENDOR_DELETE_RESET,
	VENDOR_EDIT_REQUEST,
	VENDOR_EDIT_SUCCESS,
	VENDOR_EDIT_ERROR,
	VENDOR_EDIT_RESET,
	VENDOR_MULTI_DELETE_REQUEST,
	VENDOR_MULTI_DELETE_SUCCESS,
	VENDOR_MULTI_DELETE_ERROR,
	VENDOR_MULTI_DELETE_RESET,
} from '../../Constants/userConstants';
import { toast } from 'react-toastify';

export const VendorRegisterAction = (registerdata) => async (dispatch) => {
	dispatch({
		type: VENDOR_REGISTER_REQUEST,
	});
	try {
		const { data } = await axios.post(
			`/vendor/create`,
			registerdata,
			configHeader
		);

		if (data) {
			toast.success(' Vendor Created Successfully');
		}

		dispatch({
			type: VENDOR_REGISTER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: VENDOR_REGISTER_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const VendorGetAction = (vendor_id) => async (dispatch) => {
	try {
		dispatch({
			type: VENDOR_GET_REQUEST,
		});
		const { data } = await axios.get(
			`/vendor/findById/${vendor_id}`,
			configHeader
		);

		dispatch({
			type: VENDOR_GET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: VENDOR_GET_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const VendorListAction = (queryString) => async (dispatch) => {
	try {
		dispatch({
			type: VENDOR_LIST_REQUEST,
		});

		const { data } = await axios.post(
			'/vendor/findAll?' + queryString,
			configHeader
		);

		dispatch({
			type: VENDOR_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: VENDOR_LIST_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const VendorDeleteAction = (deleteid) => async (dispatch) => {
	try {
		dispatch({
			type: VENDOR_DELETE_REQUEST,
		});

		const { data } = await axios.delete(
			`/vendor/deletevendor/${deleteid}`,
			configHeader
		);

		dispatch({
			type: VENDOR_DELETE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: VENDOR_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const VendorMultiAction = (multiid) => async (dispatch) => {
	try {
		dispatch({
			type: VENDOR_MULTI_DELETE_REQUEST,
		});

		const { data } = await axios.post(`/vendor/deletemultiple/`, multiid);

		dispatch({
			type: VENDOR_MULTI_DELETE_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.success('Vendor Deleted Successfully');
		}
		dispatch({ type: VENDOR_MULTI_DELETE_RESET });
		dispatch(VendorListAction());
		setDeletedRow([]);
	} catch (error) {
		dispatch({
			type: VENDOR_MULTI_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const EditVendorAction = (updateid, vendordata) => async (dispatch) => {
	try {
		dispatch({
			type: VENDOR_EDIT_REQUEST,
		});

		const { data } = await axios.put(
			`/vendor/updatevendor/${updateid}`,
			vendordata,
			{
				configHeader,
			}
		);

		dispatch({
			type: VENDOR_EDIT_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.success('Vendor Updated Successfully');
		}
		dispatch({ type: VENDOR_EDIT_RESET });
	} catch (error) {
		dispatch({
			type: VENDOR_EDIT_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};
