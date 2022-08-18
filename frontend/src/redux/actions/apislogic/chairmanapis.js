import axios from "axios";
import { configHeader } from "../../../localstorage/localdata";
import {
  CHAIRMAN_LIST_ERROR,
  CHAIRMAN_LIST_REQUEST,
  CHAIRMAN_LIST_SUCCESS,
  CHAIRMAN_REGISTER_ERROR,
  CHAIRMAN_REGISTER_REQUEST,
  CHAIRMAN_REGISTER_SUCCESS
} from "../../Constants/userConstants";

export const ChairmanRegisterAction = (registerdata) => async (dispatch) => {
  try {
    dispatch({
      type: CHAIRMAN_REGISTER_REQUEST
    });

    const { data } = await axios.post(
      `/api/chairman_register/`,
      registerdata,
      configHeader
    );

    dispatch({
      type: CHAIRMAN_REGISTER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CHAIRMAN_REGISTER_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message
    });
  }
};

export const ChairmanListAction = (queryString) => async (dispatch) => {
  try {
    dispatch({
      type: CHAIRMAN_LIST_REQUEST
    });

    const { data } = await axios.get(
      "/api/get_all_chairman?" + queryString,
      configHeader
    );

    dispatch({
      type: CHAIRMAN_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CHAIRMAN_LIST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message
    });
  }
};
