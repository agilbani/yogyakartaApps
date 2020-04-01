import React, {Component} from 'react';
import {View} from "react-native";
import ContentAccount from '../../moleculs/home/contentAccount';
import Header from '../../atom/header/Header';
import Colors from '../../../styles/colors';

const accountComponent = ({
   that,
   back,
   data,
   logout
}) => {
  return (
   <View style={{flex: 1}}>
      <Header backgroundColor={Colors.primary} onBack={back} iconName='arrow-left' title='User Account' />
      <ContentAccount logout={logout} data={data} that={that} />
   </View>
  );
};

export default accountComponent;
