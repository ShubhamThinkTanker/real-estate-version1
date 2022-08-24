import axios from 'axios';
import { toast } from 'react-toastify';
import { configHeader } from '../../../localstorage/localdata';
import {
	VEHICLE_DELETE_ERROR,
	VEHICLE_DELETE_REQUEST,
	VEHICLE_DELETE_SUCCESS,
	VEHICLE_EDIT_ERROR,
	VEHICLE_EDIT_REQUEST,
	VEHICLE_EDIT_SUCCESS,
	VEHICLE_GET_ERROR,
	VEHICLE_GET_REQUEST,
	VEHICLE_GET_SUCCESS,
	VEHICLE_LIST_ERROR,
	VEHICLE_LIST_REQUEST,
	VEHICLE_LIST_SUCCESS,
	VEHICLE_MULTI_DELETE_ERROR,
	VEHICLE_MULTI_DELETE_REQUEST,
	VEHICLE_MULTI_DELETE_SUCCESS,
	VEHICLE_REGISTER_ERROR,
	VEHICLE_REGISTER_REQUEST,
	VEHICLE_REGISTER_SUCCESS,
} from '../../Constants/userConstants';

//  ------------- VEHICLE CREATE REQUEST --------------
export const VehicleRegisterRequest = (registerdata) => async (dispatch) => {
	dispatch({
		type: VEHICLE_REGISTER_REQUEST,
	});
	try {
		const { data } = await axios.post(
			`/api/vehicle/create`,
			registerdata,
			configHeader
		);
		const { error, statusCode } = data;
		dispatch({
			type: VEHICLE_REGISTER_SUCCESS,
			payload: data,
		});

		if (statusCode === 201) {
			toast.success('Vehicle Created Successfully');
		}
		if (error) {
			toast.error('Something went wrong');
		}
	} catch (error) {
		toast.error('Something went wrong', error);
		dispatch({
			type: VEHICLE_REGISTER_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

//  ------------- GET ALL VEHICLE LIST REQUEST --------------
export const VehicleGetAllRequest = (queryString) => async (dispatch) => {
	dispatch({
		type: VEHICLE_LIST_REQUEST,
	});
	try {
		const { data } = await axios.get(
			`/api/vehicle?${queryString}`,
			configHeader
		);
		const { error, statusCode } = data;
		dispatch({
			type: VEHICLE_LIST_SUCCESS,
			payload: data,
		});
		if (error) {
			toast.error('Something went wrong');
		}
	} catch (error) {
		toast.error('Something went wrong');
		dispatch({
			type: VEHICLE_LIST_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

//  ------------- VEHICLE GET BY ID REQUEST --------------
export const VehicleGetByIdRequest = (id) => async (dispatch) => {
	dispatch({
		type: VEHICLE_GET_REQUEST,
	});
	try {
		const { data } = await axios.get(`/api/vehicle/${id}`, configHeader);
		const { error, statusCode } = data;
		dispatch({
			type: VEHICLE_GET_SUCCESS,
			payload: data,
		});
		if (error) {
			toast.error('Something went wrong');
		}
	} catch (error) {
		toast.error('Something went wrong');
		dispatch({
			type: VEHICLE_GET_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

//  ------------- VEHICLE EDIT BY ID REQUEST --------------
export const VehicleEditByIdRequest = (id) => async (dispatch) => {
	dispatch({
		type: VEHICLE_EDIT_REQUEST,
	});
	try {
		const { data } = await axios.put(
			`/api/vehicle/edit/${id}`,
			configHeader
		);
		const { error, statusCode } = data;
		dispatch({
			type: VEHICLE_EDIT_SUCCESS,
			payload: data,
		});
		if (statusCode === 200) {
			toast.success('Vehicle Edited Successfully');
		}
		if (error) {
			toast.error('Something went wrong');
		}
	} catch (error) {
		toast.error('Something went wrong');
		dispatch({
			type: VEHICLE_EDIT_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

//  ------------- VEHICLE DELETE REQUEST --------------
export const VehicleDeleteRequest = (id) => async (dispatch) => {
	dispatch({
		type: VEHICLE_DELETE_REQUEST,
	});
	try {
		const { data } = await axios.delete(
			`/api/vehicle/delete/${id}`,
			configHeader
		);
		const { error, statusCode } = data;
		dispatch({
			type: VEHICLE_DELETE_SUCCESS,
			payload: data,
		});

		if (error) {
			toast.error('Something went wrong');
		}
	} catch (error) {
		toast.error('Something went wrong');
		dispatch({
			type: VEHICLE_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

//  ------------- VEHICLE DELETE REQUEST --------------
export const VehicleMultipleDeleteRequest =
	(selectedData) => async (dispatch) => {
		dispatch({
			type: VEHICLE_MULTI_DELETE_REQUEST,
		});
		try {
			const { data } = await axios.post(
				`/api/vehicle/delete/`,
				selectedData,
				configHeader
			);
			const { error, statusCode } = data;
			dispatch({
				type: VEHICLE_MULTI_DELETE_SUCCESS,
				payload: data,
			});
			if (statusCode === 200) {
				toast.success('All Vehicle Deleted Successfully');
			}
			if (error) {
				toast.error('Something went wrong');
			}
		} catch (error) {
			toast.error('Something went wrong');
			dispatch({
				type: VEHICLE_MULTI_DELETE_ERROR,
				payload:
					error.response && error.response.data.errors
						? error.response.data.errors
						: error.message,
			});
		}
	};
