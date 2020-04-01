import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../styles/colors';
import ContentLogin from '../../moleculs/auth/contentLogin';

const loginComponent = ({
  that,
  pressLogin,
  signUpPress,
}) => {
  return (
    <View style={{flex: 1}}>
      <ContentLogin signUpPress={signUpPress} pressLogin={pressLogin} that={that} />
    </View>
  );
};

export default loginComponent;
