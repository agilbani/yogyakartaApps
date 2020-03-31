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
import LandingPage from '../containers/landingPage';
import Login from '../containers/auth/login';
import Menu from '../containers/menu/menu';
import Home from '../containers/home/home';

let store = compose(applyMiddleware(ReduxThunk))(createStore)(reducers);
let persistor = persistStore(store);

export default class routing extends Component { 
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Scene key="root">
              <Scene key="LandingPage" component={LandingPage} hideNavBar />
              <Scene key="Home" component={Home} hideNavBar />
              <Scene key="Menu" component={Menu} hideNavBar />
              <Scene key="Login" component={Login} hideNavBar />
              {/* <Scene key="splash" component={SplashScreen} hideNavBar /> */}
            </Scene>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
