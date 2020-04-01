import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../../styles/colors';
import {Actions} from 'react-native-router-flux';
import HomeComponent from '../../components/organism/home/homeComponent'
import Geolocation from '@react-native-community/geolocation';
import action from '../../redux/action'

class Home extends Component {
  state = {
    show: false,
    loading: true,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    dataImage: [
      {
        image: 'https://cdn-5df39a54f911cb0cdc3f7221.closte.com/wp-content/uploads/2020/01/rumah-seribu-pohon-compressor-1024x562.jpg'
      },
      {
        image: 'https://i.pinimg.com/originals/cc/ae/de/ccaede37aebbd0d9ab100d66b9cff1a6.jpg'
      },
      {
        image: 'https://malioborotour.com/wp-content/uploads/2017/11/Cave-Tubing-Goa-Pindul-Gunungkidul-1.jpg'
      },
    ],
    activeDotIndex: 0,
    heightRoute: 0,
  };

  componentDidMount() {
    Geolocation.getCurrentPosition(info => this.props.dispatch(action.setLocation(info.coords)));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HomeComponent
          destinationPress={() => Actions.Destination()} 
          accountPress={() => Actions.Account()} 
          that={this} 
        />
      </View>
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
