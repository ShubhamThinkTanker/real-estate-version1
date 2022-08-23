import {
	VEHICLE_MULTI_DELETE_ERROR,
	VEHICLE_MULTI_DELETE_REQUEST,
	VEHICLE_MULTI_DELETE_RESET,
	VEHICLE_MULTI_DELETE_SUCCESS,
	VEHICLE_DELETE_ERROR,
	VEHICLE_DELETE_REQUEST,
	VEHICLE_DELETE_RESET,
	VEHICLE_DELETE_SUCCESS,
	VEHICLE_EDIT_ERROR,
	VEHICLE_EDIT_REQUEST,
	VEHICLE_EDIT_RESET,
	VEHICLE_EDIT_SUCCESS,
	VEHICLE_GET_ERROR,
	VEHICLE_GET_REQUEST,
	VEHICLE_GET_RESET,
	VEHICLE_GET_SUCCESS,
	VEHICLE_LIST_ERROR,
	VEHICLE_LIST_REQUEST,
	VEHICLE_LIST_RESET,
	VEHICLE_LIST_SUCCESS,
	VEHICLE_REGISTER_ERROR,
	VEHICLE_REGISTER_REQUEST,
	VEHICLE_REGISTER_RESET,
	VEHICLE_REGISTER_SUCCESS,
} from '../../Constants/userConstants';

const initialState = {
	loading: false,
	error: null,
	list: [],
	vehicle: {},
};

export const vehicleReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case VEHICLE_REGISTER_REQUEST:
			newState = {
				...state,
				loading: true,
			};
			break;
		case VEHICLE_REGISTER_SUCCESS:
			newState = {
				...state,
				// list: [action.payload, ...state.list],
			};
			break;
		case VEHICLE_REGISTER_ERROR:
			newState = {
				...state,
				error: action.payload,
			};
			break;
		case VEHICLE_REGISTER_RESET:
			newState = {
				...state,
			};
			break;
		case VEHICLE_GET_REQUEST:
			newState = {
				...state,
				loading: true,
			};
			break;
		case VEHICLE_GET_SUCCESS:
			newState = {
				...state,
				vehicle: action.payload,
			};
			break;
		case VEHICLE_GET_ERROR:
			newState = {
				...state,
				error: action.payload,
			};
			break;
		case VEHICLE_GET_RESET:
			newState = {
				...state,
			};
			break;
		case VEHICLE_LIST_REQUEST:
			newState = {
				...state,
				loading: true,
			};
			break;
		case VEHICLE_LIST_SUCCESS:
			newState = {
				...state,
				list: action.payload,
			};
			break;
		case VEHICLE_LIST_ERROR:
			newState = {
				...state,
				error: action.payload,
			};
			break;
		case VEHICLE_LIST_RESET:
			newState = {
				...state,
			};
			break;
		case VEHICLE_EDIT_REQUEST:
			newState = {
				...state,
				loading: true,
			};
			break;
		case VEHICLE_EDIT_SUCCESS:
			newState = {
				...state,
				vehicle: action.payload,
			};
			break;
		case VEHICLE_EDIT_ERROR:
			newState = {
				...state,
				error: action.payload,
			};
			break;
		case VEHICLE_EDIT_RESET:
			newState = {
				...state,
			};
			break;
		case VEHICLE_DELETE_REQUEST:
			newState = {
				...state,
				loading: true,
			};
			break;
		case VEHICLE_DELETE_SUCCESS:
			newState = {
				...state,
				// vehicle: action.payload,
			};
			break;
		case VEHICLE_DELETE_ERROR:
			newState = {
				...state,
				error: action.payload,
			};
			break;
		case VEHICLE_DELETE_RESET:
			newState = {
				...state,
			};
			break;
		case VEHICLE_MULTI_DELETE_REQUEST:
			newState = {
				...state,
				loading: true,
			};
			break;
		case VEHICLE_MULTI_DELETE_SUCCESS:
			newState = {
				...state,
				// vehicle: action.payload,
			};
			break;
		case VEHICLE_MULTI_DELETE_ERROR:
			newState = {
				...state,
				error: action.payload,
			};
			break;
		case VEHICLE_MULTI_DELETE_RESET:
			newState = {
				...state,
			};
			break;
		default:
			newState = state;
			break;
	}
	return newState;
};
