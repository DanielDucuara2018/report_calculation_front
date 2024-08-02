export const SET_TOKEN = "SET_TOKEN";
export const CLEAR_STATE = "CLEAR_STATE";

export const setToken = (token) => ({ type: SET_TOKEN, payload: token });
export const clearState = () => ({ type: CLEAR_STATE });
