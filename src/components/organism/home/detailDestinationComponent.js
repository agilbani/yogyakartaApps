import React, {Component} from 'react';
import {View} from "react-native";
import ContentDetailDestination from '../../moleculs/home/contentDetailDestination';

const destinationComponent = ({
   that,
   data,
   back
}) => {
  return (
   <View style={{flex: 1}}>
      <ContentDetailDestination back={back} data={data} that={that} />
   </View>
  );
};

export default destinationComponent;
