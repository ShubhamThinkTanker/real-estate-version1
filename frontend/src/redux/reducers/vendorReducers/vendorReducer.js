import {
	VENDOR_REGISTER_ERROR,
	VENDOR_REGISTER_REQUEST,
	VENDOR_REGISTER_RESET,
	VENDOR_REGISTER_SUCCESS,
	VENDOR_GET_ERROR,
	VENDOR_GET_RESET,
	VENDOR_GET_SUCCESS,
	VENDOR_GET_REQUEST,
	VENDOR_LIST_ERROR,
	VENDOR_LIST_REQUEST,
	VENDOR_LIST_RESET,
	VENDOR_LIST_SUCCESS,
	VENDOR_DELETE_ERROR,
	VENDOR_DELETE_REQUEST,
	VENDOR_DELETE_RESET,
	VENDOR_DELETE_SUCCESS,

	VENDOR_EDIT_REQUEST,
	VENDOR_EDIT_SUCCESS,
	VENDOR_EDIT_ERROR,
	VENDOR_EDIT_RESET,
	VENDOR_MULTI_DELETE_REQUEST,
	VENDOR_MULTI_DELETE_SUCCESS,
	VENDOR_MULTI_DELETE_ERROR,
	VENDOR_MULTI_DELETE_RESET,
} from '../../Constants/userConstants';

export const VendorRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case VENDOR_REGISTER_REQUEST:
			return { loading: true };
		case VENDOR_REGISTER_SUCCESS:
			return { loading: false, VendorRegisterData: action.payload };
		case VENDOR_REGISTER_ERROR:
			return { loading: false, error: action.payload };
		case VENDOR_REGISTER_RESET:
			return {};
		default:
			return state;
	}
};

export const VendorGetReducer = (state = {}, action) => {
	switch (action.type) {
		case VENDOR_GET_REQUEST:
			return { loading: true };
		case VENDOR_GET_SUCCESS:
			return { loading: false, getVendorsRecords: action.payload };
		case VENDOR_GET_ERROR:
			return { loading: false, error: action.payload };
		case VENDOR_GET_RESET:
			return {};
		default:
			return state;
	}
};

export const EditVendoreducer = (state = {}, action) => {
	switch (action.type) {
		case VENDOR_EDIT_REQUEST:
			return { loading: true };
		case VENDOR_EDIT_SUCCESS:
			return { loading: false, VendorEditData: action.payload };
		case VENDOR_EDIT_ERROR:
			return { loading: false, error: action.payload };
		case VENDOR_EDIT_RESET:
			return {};
		default:
			return state;
	}
};

export const VendorListReducer = (state = {}, action) => {
	switch (action.type) {
		case VENDOR_LIST_REQUEST:
			return { loading: true };
		case VENDOR_LIST_SUCCESS:
			return { loading: false, getAllVendorData: action.payload };
		case VENDOR_LIST_ERROR:
			return { loading: false, error: action.payload };
		case VENDOR_LIST_RESET:
			return {};
		default:
			return state;
	}
};

export const VendorDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case VENDOR_DELETE_REQUEST:
			return { loading: true };
		case VENDOR_DELETE_SUCCESS:
			return { loading: false, deleteVendorData: action.payload };
		case VENDOR_DELETE_ERROR:
			return { loading: false, error: action.payload };
		case VENDOR_DELETE_RESET:
			return {};
		default:
			return state;
	}
};


export const VendormultiReducer = (state = {}, action) => {
	switch (action.type) {
		case VENDOR_MULTI_DELETE_REQUEST:
			return { loading: true };
		case VENDOR_MULTI_DELETE_SUCCESS:
			return { loading: false, VendordeleteMultiData: action.payload };
		case VENDOR_MULTI_DELETE_ERROR:
			return { loading: false, error: action.payload };
		case VENDOR_MULTI_DELETE_RESET:
			return {};
		default:
			return state;
	}
};
