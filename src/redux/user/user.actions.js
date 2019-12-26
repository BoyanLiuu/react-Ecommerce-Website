import { UserActionTypes } from './user.types';
 //each object is exact format taht object want to be
export const setCurrentUser = user => ({
     //exactly same as reducer type
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});