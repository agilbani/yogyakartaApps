import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
} from 'react-native';

import styles from './style';
import {Regular18, Regular14, Bold18} from '../../atom/typography/typography';
import Colors from '../../../styles/colors';
import CardView from '../../atom/card/cardView';
import Button from '../../atom/Button/normalButton';

const ContentAccount = ({
  that,
  data,
  logout,
}) => {
   return (
      <View style={styles.accountContainer}>
         <CardView width={'80%'} radius={0}>
            <View onLayout={event =>
               that.setState({
                  heightRoute: event.nativeEvent.layout.height,
               })
            } style={[styles.viewImage, {marginTop: -25}]}>
               <Image source={require('../../../assets/icon/profile_ic.png')} style={styles.img} />
            </View>
            <Regular18 color={Colors.grey} style={{alignSelf: 'center', marginTop: 15}}>USER ACCOUNT</Regular18>
            <View style={{width: '100%', marginTop: 15, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: Colors.black, borderBottomWidth: 1}}>
               <Regular14>Nama</Regular14>
               <Regular14>{data.dataLogin.data.user.name}</Regular14>
            </View>
            <View style={{width: '100%', marginTop: 15, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: Colors.black, borderBottomWidth: 1}}>
               <Regular14>Email</Regular14>
               <Regular14>{data.dataLogin.data.user.email}</Regular14>
            </View>
            <View style={{width: '100%', marginTop: 15, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: Colors.black, borderBottomWidth: 1}}>               
               <Regular14>Latitude</Regular14>
               <Regular14>{data.latitude}</Regular14>
            </View>
            <View style={{width: '100%', marginTop: 15, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: Colors.black, borderBottomWidth: 1}}>               
               <Regular14>Longitude</Regular14>
               <Regular14>{data.longitude}</Regular14>
            </View>
            <Button onPress={logout} style={styles.btnLogin} backgroundColor={Colors.logoutRed}>
               <Regular14 color={Colors.white}>Logout</Regular14>
            </Button>
         </CardView>
      </View>
   );
};

export default ContentAccount;
