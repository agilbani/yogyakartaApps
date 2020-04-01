import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

class Splash extends Component {

   componentDidMount() {
      console.log('splash', this.props);
      setTimeout(() => {
         this.cekData();
         // Actions.reset('Login');
      }, 2000);
   }

   cekData = () => {
      if (this.props.auth.isLoggedIn) {
         Actions.reset('Home');
      } else {
         Actions.reset('Login');
      };
   }
   render() {
      return (
         <View style={styles.container}>
            <Image source={require('./src/assets/icon/jogja_ic.png')} style={styles.img} />
         </View>
      )
   }
}

const mapStateToProps = ({auth}) => ({
   auth,
 });
 
 export default connect(mapStateToProps)(Splash);

const styles = StyleSheet.create({
   container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
   },
   img: {
      width: Dimensions.get('window').width * 0.6,
      height: Dimensions.get('window').height * 0.3,
      resizeMode: 'contain'
   }
})