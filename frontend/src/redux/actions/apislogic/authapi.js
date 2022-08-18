import axios from "axios";
import { configHeader } from "../../../localstorage/localdata";
import {
  FORGOTPASSWORD_USER_ERROR,
  FORGOTPASSWORD_USER_REQUEST,
  FORGOTPASSWORD_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  RESETPASSWORD_USER_ERROR,
  RESETPASSWORD_USER_REQUEST,
  RESETPASSWORD_USER_SUCCESS,
  RESET_USER_ERROR,
  RESET_USER_REQUEST,
  RESET_USER_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "../../Constants/userConstants";

export const loginAction = (logindata) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    const { data } = await axios.post("/api/login", logindata);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    });
    localStorage.setItem(
      "userData",
      JSON.stringify({
        Token: data.data.Token,
        User_Details: data.data.User_Details,
      })
    );
    window.location.href = "dashboard";
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};

export const forgotpasswordAction = (fpdata) => async (dispatch) => {
  try {
    dispatch({
      type: FORGOTPASSWORD_USER_REQUEST,
    });

    const { data } = await axios.post("/api/forgotpassword", fpdata);

    dispatch({
      type: FORGOTPASSWORD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORGOTPASSWORD_USER_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};

export const ResetpasswordAction =
  (ResetData, ResetLink) => async (dispatch) => {
    try {
      dispatch({
        type: RESETPASSWORD_USER_REQUEST,
      });

      const { data } = await axios.post(
        `/api/resetPassword/${ResetLink}`,
        ResetData
      );

      dispatch({
        type: RESETPASSWORD_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RESETPASSWORD_USER_ERROR,
        payload:
          error.response && error.response.data.errors
            ? error.response.data.errors
            : error.message,
      });
    }
  };

export const EditProfileAction = (updateid, userdata) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });

    const { data } = await axios.put(`/api/update/${updateid}`, userdata, {
      configHeader,
    });
    
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_ERROR,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message,
    });
  }
};
