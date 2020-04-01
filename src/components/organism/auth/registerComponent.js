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
import ContentRegister from '../../moleculs/auth/contentRegister';

const registerComponent = ({
  that,
  signUpPress,
}) => {
  return (
    <View style={{flex: 1}}>
      <ContentRegister signUpPress={signUpPress} that={that} />
    </View>
  );
};

export default registerComponent;
