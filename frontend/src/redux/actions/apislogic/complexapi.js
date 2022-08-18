import axios from "axios";
import { configHeader } from "../../../localstorage/localdata";
import {
  COMPLEX_CREATE_ERROR,
  COMPLEX_CREATE_REQUEST,
  COMPLEX_CREATE_SUCCESS,
  COMPLEX_GET_ERROR,
  COMPLEX_GET_REQUEST,
  COMPLEX_GET_SUCCESS,
  COMPLEX_LIST_ERROR,
  COMPLEX_LIST_REQUEST,
  COMPLEX_LIST_SUCCESS
} from "../../Constants/userConstants";

export const ComplexListAction = (queryString) => async (dispatch) => {
  try {
    dispatch({
      type: COMPLEX_LIST_REQUEST
    });

    const { data } = await axios.get(
      "/realestate/find?" + queryString,
      configHeader
    );

    dispatch({
      type: COMPLEX_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: COMPLEX_LIST_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message
    });
  }
};

export const ComplexGetAction = (complexid) => async (dispatch) => {
  try {
    dispatch({
      type: COMPLEX_GET_REQUEST
    });
    const { data } = await axios.get(
      `/realestate/findid/${complexid}`,
      configHeader
    );

    dispatch({
      type: COMPLEX_GET_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: COMPLEX_GET_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message
    });
  }
};

export const ComplexCreateAction = (realestateData) => async (dispatch) => {
  try {
    dispatch({
      type: COMPLEX_CREATE_REQUEST
    });

    const { data } = await axios.post(
      `/realestate/add`,
      realestateData,
      configHeader
    );

    dispatch({
      type: COMPLEX_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: COMPLEX_CREATE_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message
    });
  }
};
