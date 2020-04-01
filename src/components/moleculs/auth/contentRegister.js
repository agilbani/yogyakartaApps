import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
import {Regular18, Regular14} from '../../atom/typography/typography';
import Colors from '../../../styles/colors';
import CardView from '../../atom/card/cardView';
import InputFrom from '../../atom/fieldInput/input';
import Button from '../../atom/button/normalButton';

const ContentRegister = ({
  that,
  signUpPress,
}) => {
  return (
    <View style={styles.container}>
      <CardView width={'80%'} radius={0}>
         <View onLayout={event =>
            that.setState({
               heightRoute: event.nativeEvent.layout.height,
            })
         } style={[styles.viewImage, {marginTop: -25}]}>
            <Image source={require('../../../assets/icon/profile_ic.png')} style={styles.img} />
         </View>
         <Regular18 color={Colors.grey} style={{alignSelf: 'center', marginTop: 15}}>REGISTER FORM</Regular18>
         <View style={styles.form}>
            <InputFrom onChangeText={(nama) => that.setState({nama})} value={that.state.nama} placeholder='Name' width={'100%'} marginTop={10} />
            <InputFrom keyboardType='email-address' onChangeText={(email) => that.setState({email})} value={that.state.email} placeholder='Email' width={'100%'} marginTop={20} />
            <InputFrom onChangeText={(password) => that.setState({password})} value={that.state.password} secureTextEntry placeholder='Password' width={'100%'} marginTop={20} />
            <InputFrom onChangeText={(confirmation_password) => that.setState({confirmation_password})} value={that.state.confirmation_password} secureTextEntry placeholder='Confirmation Password' width={'100%'} marginTop={20} />
         </View>
         <Button onPress={signUpPress} style={styles.btnLogin} backgroundColor={Colors.success}>
            <Regular14 color={Colors.white}>SIGN UP</Regular14>
         </Button>
      </CardView>
    </View>
  );
};

export default ContentRegister;
