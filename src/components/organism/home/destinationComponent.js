import React, {Component} from 'react';
import {View} from "react-native";
import ContentDestination from '../../moleculs/home/contentDestination';
import Header from '../../atom/header/Header';
import Colors from '../../../styles/colors';

const destinationComponent = ({
   that,
   back,
   data,
   loadMore,
   onPress
}) => {
  return (
   <View style={{flex: 1}}>
      <Header backgroundColor={Colors.primary} onBack={back} iconName='arrow-left' title='Destination List' />
      <ContentDestination press={item => onPress(item)} data={data} that={that} loadMore={loadMore} />
   </View>
  );
};

export default destinationComponent;
