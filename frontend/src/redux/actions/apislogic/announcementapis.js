import axios from 'axios';
import { configHeader } from '../../../localstorage/localdata';
import {
	ANNOUNCEMENT_REGISTER_ERROR,
	ANNOUNCEMENT_REGISTER_REQUEST,
	ANNOUNCEMENT_REGISTER_SUCCESS,
	ANNOUNCEMENT_GET_ERROR,
	ANNOUNCEMENT_GET_REQUEST,
	ANNOUNCEMENT_GET_SUCCESS,
	ANNOUNCEMENT_LIST_ERROR,
	ANNOUNCEMENT_LIST_REQUEST,
	ANNOUNCEMENT_LIST_SUCCESS,
	ANNOUNCEMENT_DELETE_ERROR,
	ANNOUNCEMENT_DELETE_REQUEST,
	ANNOUNCEMENT_DELETE_SUCCESS,
	ANNOUNCEMENT_DELETE_RESET,
	ANNOUNCEMENT_EDIT_REQUEST,
	ANNOUNCEMENT_EDIT_SUCCESS,
	ANNOUNCEMENT_EDIT_ERROR,
	ANNOUNCEMENT_EDIT_RESET,
	ANNOUNCEMENT_MULTI_DELETE_RESET,
	ANNOUNCEMENT_MULTI_DELETE_REQUEST,
	ANNOUNCEMENT_MULTI_DELETE_SUCCESS,
	ANNOUNCEMENT_MULTI_DELETE_ERROR,
} from '../../Constants/userConstants';
import { toast } from 'react-toastify';

export const AnnouncementRegisterAction = (registerdata) => async (dispatch) => {
	
	dispatch({
		type: ANNOUNCEMENT_REGISTER_REQUEST,
	});
	try {
		const { data } = await axios.post(
			'/chairman/announcement/create',
			registerdata,
			configHeader
		);

		if (data) {
			toast.success('Announcement Created Successfully');
		}

		dispatch({
			type: ANNOUNCEMENT_REGISTER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ANNOUNCEMENT_REGISTER_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const AnnouncementListAction = (queryString) => async (dispatch) => {
	try {
		dispatch({
			type: ANNOUNCEMENT_LIST_REQUEST,
		});

		const { data } = await axios.get(
			'/chairman/announcement/getAll_Announcement?' + queryString,
			configHeader
		);

		dispatch({
			type: ANNOUNCEMENT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ANNOUNCEMENT_LIST_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const AnnouncementGetAction = (announcement_id) => async (dispatch) => {
	try {
		dispatch({
			type: ANNOUNCEMENT_GET_REQUEST,
		});
		const { data } = await axios.get(
			`/chairman/announcement/get_Announcement/${announcement_id}`,
			configHeader
		);

		dispatch({
			type: ANNOUNCEMENT_GET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ANNOUNCEMENT_GET_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const EditAnnouncementAction = (updateid, announcementdata) => async (dispatch) => {
	try {
		dispatch({
			type: ANNOUNCEMENT_EDIT_REQUEST,
		});

		const { data } = await axios.put(
			`/chairman/announcement/update/${updateid}`,
			announcementdata,
			{
				configHeader,
			}
		);

		dispatch({
			type: ANNOUNCEMENT_EDIT_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.success('Announcement Updated Successfully');
		}
		dispatch({ type: ANNOUNCEMENT_EDIT_RESET });
	} catch (error) {
		dispatch({
			type: ANNOUNCEMENT_EDIT_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const AnnouncementDeleteAction = (deleteid) => async (dispatch) => {
	try {
		dispatch({
			type: ANNOUNCEMENT_DELETE_REQUEST,
		});

		const { data } = await axios.delete(
			`/chairman/announcement/delete/${deleteid}`,
			configHeader
		);

		dispatch({
			type: ANNOUNCEMENT_DELETE_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.error('Announcement Deleted Successfully');
		}
		dispatch({ type: ANNOUNCEMENT_DELETE_RESET });
		dispatch(AnnouncementListAction());
	} catch (error) {
		dispatch({
			type: ANNOUNCEMENT_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};

export const AnnouncementMultiAction = (multiid) => async (dispatch) => {
	try {
		dispatch({
			type: ANNOUNCEMENT_MULTI_DELETE_REQUEST,
		});

		const { data } = await axios.delete(`/chairman/announcement/delete_many/`, multiid);

		dispatch({
			type: ANNOUNCEMENT_MULTI_DELETE_SUCCESS,
			payload: data,
		});
		if (data) {
			toast.error('Announcement Deleted Successfully');
		}
		dispatch({ type: ANNOUNCEMENT_MULTI_DELETE_RESET });
		dispatch(AnnouncementListAction());
		setDeletedRow([]);
	} catch (error) {
		dispatch({
			type: ANNOUNCEMENT_MULTI_DELETE_ERROR,
			payload:
				error.response && error.response.data.errors
					? error.response.data.errors
					: error.message,
		});
	}
};


