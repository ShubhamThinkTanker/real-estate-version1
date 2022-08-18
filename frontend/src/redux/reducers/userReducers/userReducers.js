import {
  MULTI_DELETE_ERROR,
  MULTI_DELETE_REQUEST,
  MULTI_DELETE_RESET,
  MULTI_DELETE_SUCCESS,
  USER_DELETE_ERROR,
  USER_DELETE_REQUEST,
  USER_DELETE_RESET,
  USER_DELETE_SUCCESS,
  USER_EDIT_ERROR,
  USER_EDIT_REQUEST,
  USER_EDIT_RESET,
  USER_EDIT_SUCCESS,
  USER_GET_ERROR,
  USER_GET_REQUEST,
  USER_GET_RESET,
  USER_GET_SUCCESS,
  USER_LIST_ERROR,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
} from "../../Constants/userConstants";

export const UserRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, UserRegisterData: action.payload };
    case USER_REGISTER_ERROR:
      return { loading: false, error: action.payload };
    case USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};


export const EditRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return { loading: true };
    case USER_EDIT_SUCCESS:
      return { loading: false, UserEditData: action.payload };
    case USER_EDIT_ERROR:
      return { loading: false, error: action.payload };
    case USER_EDIT_RESET:
      return {};
    default:
      return state;
  }
};



export const UserDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, deleteUserData: action.payload };
    case USER_DELETE_ERROR:
      return { loading: false, error: action.payload };
    case USER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};


export const MultiDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MULTI_DELETE_REQUEST:
      return { loading: true };
    case MULTI_DELETE_SUCCESS:
      return { loading: false, deleteMultirData: action.payload };
    case MULTI_DELETE_ERROR:
      return { loading: false, error: action.payload };
    case MULTI_DELETE_RESET:
      return {};
    default:
      return state;
  }
};


export const UserListReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, getAllUserData: action.payload };
    case USER_LIST_ERROR:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return {};
    default:
      return state;
  }
};

export const UserGetReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GET_REQUEST:
      return { loading: true };
    case USER_GET_SUCCESS:
      return { loading: false, getUsersRecords: action.payload };
    case USER_GET_ERROR:
      return { loading: false, error: action.payload };
    case USER_GET_RESET:
      return {};
    default:
      return state;
  }
};
