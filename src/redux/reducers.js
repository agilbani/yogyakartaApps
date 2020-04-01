import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

// @start auth reducer
const AUTH_STATE = {
  dataLogin: null,
  dataLoginError: null,
  isLoggedIn: false,
  loginError: false,
  registerSuccess: false,
  registerError: false,
  dataRegisterError: null,
  message: null,
  logoutSuccess: false,
  latitude: null,
  longitude: null
};

const authReducer = (state = AUTH_STATE, action) => {
  switch (action.type) {
    case 'RESET':
      return {
        ...state,
        dataLogin: null,
        dataLoginError: null,
        isLoggedIn: false,
        loginError: false,
        registerSuccess: false,
        registerError: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        dataLogin: action.response.data,
        isLoggedIn: true,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        latitude: action.location.latitude,
        longitude: action.location.longitude
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        registerSuccess: true,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        registerError: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        logoutSuccess: true,
        message: action.response.status.message,
        dataLogin: null,
        dataLoginError: null,
        isLoggedIn: false,
        loginError: false,
        registerSuccess: false,
        registerError: false,
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
  dataDestination: null,
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
    case 'SUCCESS_DATA_DESTINATION':
      let dataDest = [];
      if (action.page > 1) {
        for (i in state.dataDestination) {
          dataDest.push(state.dataDestination[i]);
        }
      }
      for (o in action.response.data.data) {
        dataDest.push(action.response.data.data[o]);
      }
      return {
        ...state,
        dataDestination: dataDest,
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
  blacklist: ['navigation', 'app'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  app: persistReducer(appPersistConfig, appReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
