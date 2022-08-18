import {
	COMPLEX_CREATE_ERROR,
	COMPLEX_CREATE_REQUEST,
	COMPLEX_CREATE_RESET,
	COMPLEX_CREATE_SUCCESS,
	COMPLEX_GET_ERROR,
	COMPLEX_GET_REQUEST,
	COMPLEX_GET_RESET,
	COMPLEX_GET_SUCCESS,
	COMPLEX_LIST_ERROR,
	COMPLEX_LIST_REQUEST,
	COMPLEX_LIST_RESET,
	COMPLEX_LIST_SUCCESS,
	COMPLEX_EDIT_SUCCESS,
	COMPLEX_EDIT_ERROR,
	COMPLEX_EDIT_REQUEST,
	COMPLEX_EDIT_RESET,
	COMPLEX_DELETE_ERROR,
	COMPLEX_DELETE_REQUEST,
	COMPLEX_DELETE_RESET,
	COMPLEX_DELETE_SUCCESS,
	COMPLEX_MULTI_DELETE_REQUEST,
	COMPLEX_MULTI_DELETE_SUCCESS,
	COMPLEX_MULTI_DELETE_ERROR,
	COMPLEX_MULTI_DELETE_RESET,
} from '../../Constants/userConstants';

export const ComplexListReducer = (state = {}, action) => {
	switch (action.type) {
		case COMPLEX_LIST_REQUEST:
			return { loading: true };
		case COMPLEX_LIST_SUCCESS:
			return { loading: false, getAllComplexData: action.payload };
		case COMPLEX_LIST_ERROR:
			return { loading: false, error: action.payload };
		case COMPLEX_LIST_RESET:
			return {};
		default:
			return state;
	}
};

export const ComplexGetReducer = (state = {}, action) => {
	switch (action.type) {
		case COMPLEX_GET_REQUEST:
			return { loading: true };
		case COMPLEX_GET_SUCCESS:
			return { loading: false, getComplexRecord: action.payload };
		case COMPLEX_GET_ERROR:
			return { loading: false, error: action.payload };
		case COMPLEX_GET_RESET:
			return {};
		default:
			return state;
	}
};

export const ComplexCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case COMPLEX_CREATE_REQUEST:
			return { loading: true };
		case COMPLEX_CREATE_SUCCESS:
			return { loading: false, ComplexCreateData: action.payload };
		case COMPLEX_CREATE_ERROR:
			return { loading: false, error: action.payload };
		case COMPLEX_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const EditComplexreducer = (state = {}, action) => {
	switch (action.type) {
		case COMPLEX_EDIT_REQUEST:
			return { loading: true };
		case COMPLEX_EDIT_SUCCESS:
			return { loading: false, ComplexEditData: action.payload };
		case COMPLEX_EDIT_ERROR:
			return { loading: false, error: action.payload };
		case COMPLEX_EDIT_RESET:
			return {};
		default:
			return state;
	}
};
export const ComplexDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case COMPLEX_DELETE_REQUEST:
			return { loading: true };
		case COMPLEX_DELETE_SUCCESS:
			return { loading: false, deleteComplexData: action.payload };
		case COMPLEX_DELETE_ERROR:
			return { loading: false, error: action.payload };
		case COMPLEX_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const ComplexmultiReducer = (state = {}, action) => {
	switch (action.type) {
		case COMPLEX_MULTI_DELETE_REQUEST:
			return { loading: true };
		case COMPLEX_MULTI_DELETE_SUCCESS:
			return { loading: false, ComplexdeleteMultiData: action.payload };
		case COMPLEX_MULTI_DELETE_ERROR:
			return { loading: false, error: action.payload };
		case COMPLEX_MULTI_DELETE_RESET:
			return {};
		default:
			return state;
	}
};
