import { SET_TOKEN, CLEAR_STATE } from "../actions/appActions";

const initialState = {
  token: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};

export default appReducer;
