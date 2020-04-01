import axios from 'axios';
const BASE_URL = 'http://recruitment.devmind2.net/';

export default {
  // @start auth api

  login: body => {
    console.log('aaaa');
    return dispatch => {
      axios
        .post(BASE_URL + 'api/login', body, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log(response, 'succcss login');
          return dispatch({type: 'LOGIN_SUCCESS', response});
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)), 'error');
          return dispatch({type: 'LOGIN_ERROR'});
        });
    };
  },

  register: body => {
    return dispatch => {
      axios
        .post(BASE_URL + 'api/register', body, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log(response, 'succcss login');
          return dispatch({type: 'REGISTER_SUCCESS', response});
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)), 'error');
          return dispatch({type: 'REGISTER_ERROR'});
        });
    };
  },

  getDestination: (page, token) => {
    return dispatch => {
      axios
        .get(BASE_URL + `api/post?page=${page}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+ token,
          },
        })
        .then(response => {
          console.log(response, 'succcss');
          return dispatch({type: 'SUCCESS_DATA_DESTINATION', response, page});
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)), 'error');
          // let message = errorMessage(error);
          // return dispatch({type: 'ERROR', message});
        });
    };
  },

  logoutApi: token => {
    console.log('token', token);
    
    return dispatch => {
      axios
        .post(BASE_URL + 'api/logout', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+ token,
            'Accept': 'application/json',
          },
        })
        .then(response => {
          console.log(response, 'succcss logout');
          return dispatch({type: 'LOGOUT_SUCCESS', response});
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)), 'error');
          // return dispatch({type: 'LOGIN_ERROR'});
        });
    };
  },

  setLocation: (location) => {
    return dispatch => {
      return dispatch({type: "SET_LOCATION", location});
    }
  },

  logout: () => {
    return dispatch => {
      return dispatch({type: "RESET"});
    }
  }
};
