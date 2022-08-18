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
  COMPLEX_LIST_SUCCESS
} from "../../Constants/userConstants";

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
