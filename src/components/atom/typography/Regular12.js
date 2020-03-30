import React from 'react';
import {Text} from 'react-native';

const Regular12 = ({color, children, style}) => {
   return (
      <Text
         style={{
            color: color,
            fontSize: 12,
            fontFamily: 'Nunito-Regular',
            ...style,
         }}>
         {children}
      </Text>
   );
};

export default Regular12;
