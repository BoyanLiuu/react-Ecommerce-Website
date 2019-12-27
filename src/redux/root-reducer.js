// it combine all the other state 
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducers';
const persistConfig = {
  key: 'root',
  storage,
  //the only thing we want to persist, we add to white list.
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop:shopReducer
});
//a modified root reducer with persistance on top of it
export default persistReducer(persistConfig, rootReducer);