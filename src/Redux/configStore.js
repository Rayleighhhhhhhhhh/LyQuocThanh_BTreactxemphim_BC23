import { combineReducers, createStore } from 'redux'
import xemPhimRedux from './xemPhimRedux';


const rootReducer = combineReducers({
  //các state dự án sẽ được khai báo tại đây
  xemPhimRedux
});


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());