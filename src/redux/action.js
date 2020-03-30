import axios from 'axios';
const BASE_URL = 'http://maxxapi.technopartner.rocks/';

export default {
  // @start auth api
  getToken: body => {
    return dispatch => {
      axios
        .post(BASE_URL + 'oauth/access_token', body)
        .then(response => {
          console.log(response, 'succcss');
          return dispatch({type: 'GET_TOKEN_SUCCESS', response});
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)), 'error');
          // let message = errorMessage(error);
          // return dispatch({type: 'LOGIN_ERROR', message});
        });
    };
  },

  login: body => {
    return dispatch => {
      axios
        .post(BASE_URL + 'api/login', body, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: body.token_type + ' ' + body.access_token,
          },
        })
        .then(response => {
          console.log(response, 'succcss');
          return dispatch({type: 'LOGIN_SUCCESS', response});
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)), 'error');
          // let message = errorMessage(error);
          // return dispatch({type: 'LOGIN_ERROR', message});
        });
    };
  },

  getDataHOme: (body, token_type, access_token) => {
    return dispatch => {
      axios
        .post(BASE_URL + 'api/v2/home', body, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token_type + ' ' + access_token,
          },
        })
        .then(response => {
          console.log(response, 'succcss');
          return dispatch({type: 'SUCCESS_DATA_HOME', response});
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)), 'error');
          // let message = errorMessage(error);
          // return dispatch({type: 'ERROR', message});
        });
    };
  },

  getMenu: (token_type, access_token) => {
    return dispatch => {
      axios
        .get(BASE_URL + 'api/menu/list', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token_type + ' ' + access_token,
          },
        })
        .then(response => {
          return dispatch({type: 'GET_DATA_MENU', response});
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)), 'error');
          // let message = errorMessage(error);
          // return dispatch({ type: 'ERROR', message });
        });
    };
  },
};
