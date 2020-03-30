import React from 'react';
import {Text} from 'react-native';

const Regular10 = ({color, children, style}) => {
   return (
      <Text
         style={{
            color: color,
            fontSize: 10,
            fontFamily: 'Nunito-Regular',
            ...style,
         }}>
         {children}
      </Text>
   );
};

export default Regular10;
