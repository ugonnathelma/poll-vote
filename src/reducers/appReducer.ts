import { SET_LOADING, SET_NOTIFICATION } from "../constants";
import { ReducerAction } from "../common/types";

const initialState = {
  loading: false,
  notification: {
    type: null,
    message: null,
    hide: true,
  },
};

export default function appReducer(
  state = initialState,
  action: ReducerAction
) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
