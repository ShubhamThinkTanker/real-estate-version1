import {
	ANNOUNCEMENT_REGISTER_ERROR,
	ANNOUNCEMENT_REGISTER_REQUEST,
	ANNOUNCEMENT_REGISTER_RESET,
	ANNOUNCEMENT_REGISTER_SUCCESS,
	ANNOUNCEMENT_GET_ERROR,
	ANNOUNCEMENT_GET_RESET,
	ANNOUNCEMENT_GET_SUCCESS,
	ANNOUNCEMENT_GET_REQUEST,
	ANNOUNCEMENT_LIST_ERROR,
	ANNOUNCEMENT_LIST_REQUEST,
	ANNOUNCEMENT_LIST_RESET,
	ANNOUNCEMENT_LIST_SUCCESS,
	ANNOUNCEMENT_DELETE_ERROR,
	ANNOUNCEMENT_DELETE_REQUEST,
	ANNOUNCEMENT_DELETE_RESET,
	ANNOUNCEMENT_DELETE_SUCCESS,
	ANNOUNCEMENT_EDIT_REQUEST,
	ANNOUNCEMENT_EDIT_SUCCESS,
	ANNOUNCEMENT_EDIT_ERROR,
	ANNOUNCEMENT_EDIT_RESET,
	ANNOUNCEMENT_MULTI_DELETE_REQUEST,
	ANNOUNCEMENT_MULTI_DELETE_SUCCESS,
	ANNOUNCEMENT_MULTI_DELETE_ERROR,
	ANNOUNCEMENT_MULTI_DELETE_RESET,
} from '../../Constants/userConstants';

export const AnnouncementRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case ANNOUNCEMENT_REGISTER_REQUEST:
			return { loading: true };
		case ANNOUNCEMENT_REGISTER_SUCCESS:
			return { loading: false, AnnouncementRegisterData: action.payload };
		case ANNOUNCEMENT_REGISTER_ERROR:
			return { loading: false, error: action.payload };
		case ANNOUNCEMENT_REGISTER_RESET:
			return {};
		default:
			return state;
	}
};

export const AnnouncementGetReducer = (state = {}, action) => {
	switch (action.type) {
		case ANNOUNCEMENT_GET_REQUEST:
			return { loading: true };
		case ANNOUNCEMENT_GET_SUCCESS:
			return { loading: false, getAnnouncementRecords: action.payload };
		case ANNOUNCEMENT_GET_ERROR:
			return { loading: false, error: action.payload };
		case ANNOUNCEMENT_GET_RESET:
			return {};
		default:
			return state;
	}
};

export const EditAnnouncementReducer = (state = {}, action) => {
	switch (action.type) {
		case ANNOUNCEMENT_EDIT_REQUEST:
			return { loading: true };
		case ANNOUNCEMENT_EDIT_SUCCESS:
			return { loading: false, AnnouncementEditData: action.payload };
		case ANNOUNCEMENT_EDIT_ERROR:
			return { loading: false, error: action.payload };
		case ANNOUNCEMENT_EDIT_RESET:
			return {};
		default:
			return state;
	}
};

export const AnnouncementListReducer = (state = {}, action) => {
	switch (action.type) {
		case ANNOUNCEMENT_LIST_REQUEST:
			return { loading: true };
		case ANNOUNCEMENT_LIST_SUCCESS:
			return { loading: false, getAllAnnouncementData: action.payload };
		case ANNOUNCEMENT_LIST_ERROR:
			return { loading: false, error: action.payload };
		case ANNOUNCEMENT_LIST_RESET:
			return {};
		default:
			return state;
	}
};

export const AnnouncementDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case ANNOUNCEMENT_DELETE_REQUEST:
			return { loading: true };
		case ANNOUNCEMENT_DELETE_SUCCESS:
			return { loading: false, deleteAnnouncementData: action.payload };
		case ANNOUNCEMENT_DELETE_ERROR:
			return { loading: false, error: action.payload };
		case ANNOUNCEMENT_DELETE_RESET:
			return {};
		default:
			return state;
	}
};


export const AnnouncementmultiReducer = (state = {}, action) => {
	switch (action.type) {
		case ANNOUNCEMENT_MULTI_DELETE_REQUEST:
			return { loading: true };
		case ANNOUNCEMENT_MULTI_DELETE_SUCCESS:
			return { loading: false, AnnouncementdeleteMultiData: action.payload };
		case ANNOUNCEMENT_MULTI_DELETE_ERROR:
			return { loading: false, error: action.payload };
		case ANNOUNCEMENT_MULTI_DELETE_RESET:
			return {};
		default:
			return state;
	}
};
