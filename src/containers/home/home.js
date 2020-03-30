import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import action from '../../redux/action';
import {connect} from 'react-redux';
import Drawer from '../../components/atom/navMenu/drawer';
import Loading from '../../components/atom/loading/customLoading';
import ComponentSwip from '../../components/organism/swipable/swipableComponent';
import SwipeUpDown from 'react-native-swipe-up-down';
import Colors from '../../styles/colors';
import {Regular16} from '../../components/atom/typography/typography';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  state = {
    show: false,
    loading: true,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  componentDidMount() {
    const body = {
      token: this.props.auth.dataLogin.token,
      token_type: this.props.auth.clientToken.token_type,
      access_token: this.props.auth.clientToken.access_token,
    };

    this.props.dispatch(action.getDataHOme(body));
  }

  componentWillReceiveProps(props) {
    console.log('response home', props);
    if (props.app) {
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/komponen/BackgroundHome.jpg')}
        style={styles.container}
        resizeMethod="resize">
        <Loading show={this.state.loading} />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.setState({show: true})}
            style={{padding: 3}}>
            <Image
              style={styles.img}
              source={require('../../assets/komponen/NavDrawerBlack.png')}
            />
          </TouchableOpacity>
        </View>
        {this.props.app && this.props.app.dataHome ? (
          <View style={{width: '95%', alignSelf: 'center'}}>
            <Regular16 color={Colors.white}>
              {this.props.app.dataHome.salam}
            </Regular16>
            <Regular16 color={Colors.white}>
              {this.props.app.dataHome.username}
            </Regular16>
            <Regular16 color={Colors.white}>
              IDR {this.props.app.dataHome.balance}
            </Regular16>
            <Regular16 color={Colors.white}>
              {this.props.app.dataHome.beans} Beans
            </Regular16>
          </View>
        ) : null}
        {this.props.app ? (
          <SwipeUpDown
            itemMini={
              <ComponentSwip
                data={this.props.app ? this.props.app.dataHome : null}
              />
            }
            itemFull={
              <ComponentSwip
                data={this.props.app ? this.props.app.dataHome : null}
              />
            }
            height={100}
            onShowMini={() =>
              this.setState({backgroundColor: 'rgba(255, 255, 255, 0.8)'})
            }
            onShowFull={() => this.setState({backgroundColor: '#FFF'})}
            disablePressToShow={false} // Press item mini to show full
            style={{backgroundColor: this.state.backgroundColor}} // style for swipe
          />
        ) : null}
        <Drawer
          confirm={() => Actions.Menu()}
          setState={(key, val) => this.setState({[key]: val})}
          visible={this.state.show}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({app, auth}) => ({
  app,
  auth,
});

export default connect(mapStateToProps)(Home);

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
});
