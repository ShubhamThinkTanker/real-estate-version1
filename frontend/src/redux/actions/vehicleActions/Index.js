import axios from 'axios';
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

		dispatch({
			type: VEHICLE_REGISTER_SUCCESS,
			payload: data,
		});

		if (data) {
			toast.success('Vehicle Created Successfully');
		}
	} catch (error) {
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
export const VehicleGetAllRequest = () => async (dispatch) => {
	dispatch({
		type: VEHICLE_LIST_REQUEST,
	});
	try {
		const { data } = await axios.get(`/api/vehicle/`, configHeader);

		dispatch({
			type: VEHICLE_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
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

		dispatch({
			type: VEHICLE_GET_SUCCESS,
			payload: data,
		});
	} catch (error) {
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

		dispatch({
			type: VEHICLE_EDIT_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.success('Vehicle Edited Successfully');
		}
	} catch (error) {
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

		dispatch({
			type: VEHICLE_DELETE_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.success('Vehicle Deleted Successfully');
		}
	} catch (error) {
		dispatch({
			type: VEHICLE_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};
