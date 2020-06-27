import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};
//reducer is just state and action, it is current state when action fire,
//we set initial state when first fire up.
//if action type is what we want we will create new object
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      //return a new state
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
// bring to root reducer
export default userReducer;
