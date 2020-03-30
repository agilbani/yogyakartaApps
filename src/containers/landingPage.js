import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {Regular14} from '../components/atom/typography/typography';
import Button from '../components/atom/Button/normalButton';
import Colors from '../styles/colors';
import Drawer from '../components/atom/navMenu/drawer';
import {Actions} from 'react-native-router-flux';
import action from '../../src/redux/action';
import {connect} from 'react-redux';
import Loading from '../components/atom/loading/customLoading';
import ComponentSwip from '../components/organism/swipable/swipableComponent';
import SwipeUpDown from 'react-native-swipe-up-down';

class landingPage extends Component {
  state = {
    show: false,
    loading: true,
  };

  componentWillMount() {
    const body = {
      client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
      client_id: 'e78869f77986684a',
      grant_type: 'password',
      username: 'support@technopartner.id',
      password: '1234567',
    };
    this.props.dispatch(action.getToken(body));
  }

  componentDidMount() {
    console.log('props landingpage', this.props);
    if (this.props.auth && this.props.auth.isLoggedIn) {
      setTimeout(() => {
        this.setState({loading: false}), Actions.reset('Home');
      }, 2000);
    }
  }

  componentWillReceiveProps(props) {
    console.log('responses', props);
    if (props.auth.clientToken) {
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/komponen/BackgroundHome.jpg')}
        style={styles.container}
        resizeMethod="resize">
        <Loading show={this.state.loading} />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.setState({show: true})}
            style={{padding: 3}}>
            <Image
              style={styles.img}
              source={require('../assets/komponen/NavDrawerBlack.png')}
            />
          </TouchableOpacity>
          <Regular14 color={Colors.white}>Good Morning</Regular14>
        </View>
        <View style={styles.viewButton}>
          <Button backgroundColor={Colors.success} style={styles.btnSignup}>
            <Regular14 color={Colors.white}>SIGN UP</Regular14>
          </Button>
          <Button
            onPress={() => Actions.Login()}
            backgroundColor="transparent"
            style={styles.btnLogin}>
            <Regular14 color={Colors.white}>Login</Regular14>
          </Button>
        </View>
        <Drawer
          setState={(key, val) => this.setState({[key]: val})}
          visible={this.state.show}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  auth,
});

export default connect(mapStateToProps)(landingPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  viewButton: {
    width: '100%',
    padding: 5,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 5,
  },
  btnSignup: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnLogin: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
});
