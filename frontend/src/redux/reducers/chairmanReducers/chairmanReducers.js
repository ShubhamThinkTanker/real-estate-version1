import {
  CHAIRMAN_LIST_ERROR,
  CHAIRMAN_LIST_REQUEST,
  CHAIRMAN_LIST_RESET,
  CHAIRMAN_LIST_SUCCESS,
  CHAIRMAN_REGISTER_ERROR,
  CHAIRMAN_REGISTER_REQUEST,
  CHAIRMAN_REGISTER_RESET,
  CHAIRMAN_REGISTER_SUCCESS,
} from "../../Constants/userConstants";

export const ChairmanRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case CHAIRMAN_REGISTER_REQUEST:
      return { loading: true };
    case CHAIRMAN_REGISTER_SUCCESS:
      return { loading: false, ChairmanRegisterData: action.payload };
    case CHAIRMAN_REGISTER_ERROR:
      return { loading: false, error: action.payload };
    case CHAIRMAN_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const ChairmanListReducer = (state = {}, action) => {
  switch (action.type) {
    case CHAIRMAN_LIST_REQUEST:
      return { loading: true };
    case CHAIRMAN_LIST_SUCCESS:
      return { loading: false, getAllChairmanData: action.payload };
    case CHAIRMAN_LIST_ERROR:
      return { loading: false, error: action.payload };
    case CHAIRMAN_LIST_RESET:
      return {};
    default:
      return state;
  }
};
