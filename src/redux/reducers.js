import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

// @start auth reducer
const AUTH_STATE = {
  dataLogin: null,
  dataLoginError: null,
  isLoggedIn: false,
  dataRegister: null,
  dataRegisterError: null,
  message: null,
  clientToken: null,
};

const authReducer = (state = AUTH_STATE, action) => {
  switch (action.type) {
    case 'RESET':
      return {
        ...state,
        message: null,
        dataLoginError: null,
        dataRegister: null,
        dataRegisterError: null,
        clientToken: null,
      };
    case 'GET_TOKEN_SUCCESS':
      return {
        ...state,
        clientToken: action.response.data,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        dataLogin: action.response.data,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};
// @stop

// @start app reducer
const APP_STATE = {
  dataHome: null,
  message: null,
  dataMenu: null,
};

const appReducer = (state = APP_STATE, action) => {
  switch (action.type) {
    case 'APP_RESET':
      return {
        ...state,
        dataHome: null,
        message: null,
        dataMenu: null,
      };
    case 'SUCCESS_DATA_HOME':
      return {
        ...state,
        dataHome: action.response.data,
      };
    case 'GET_DATA_MENU':
      return {
        ...state,
        dataMenu: action.response.data,
      };

    default:
      return state;
  }
};

const appPersistConfig = {
  key: 'app',
  storage: storage,
};
// @stop

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['navigation'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  app: persistReducer(appPersistConfig, appReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
