import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Text, View} from 'react-native';

// redux
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {PersistGate} from 'redux-persist/integration/react';
import reducers from '../redux/reducers';

//screen
import Login from '../containers/auth/login';
import Register from '../containers/auth/register';
import Home from '../containers/home/home';
import Destination from '../containers/home/destination/destination'
import Account from '../containers/home/account/account'
import Splash from '../../Splash';
import DetailDestination from '../containers/home/destination/detailDestination';

let store = compose(applyMiddleware(ReduxThunk))(createStore)(reducers);
let persistor = persistStore(store);

export default class routing extends Component { 
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Scene key="root">
              <Scene key="Splash" component={Splash} hideNavBar />
              <Scene key="Login" component={Login} hideNavBar />
              <Scene key="Register" component={Register} hideNavBar />
              <Scene key="Home" component={Home} hideNavBar />
              <Scene key="Destination" component={Destination} hideNavBar />
              <Scene key="Account" component={Account} hideNavBar />
              <Scene key="DetailDestination" component={DetailDestination} hideNavBar />
            </Scene>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
