import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import ContentHome from '../../moleculs/home/contentHome';

const homeComponent = ({
  that,
  destinationPress,
  accountPress
}) => {
  return (
   <ContentHome destinationPress={destinationPress} accountPress={accountPress} that={that} />
  );
};

export default homeComponent;
