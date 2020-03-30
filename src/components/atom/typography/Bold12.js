import React from 'react';
import {Text} from 'react-native';

const Bold12 = ({color, children, style}) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default Bold12;
