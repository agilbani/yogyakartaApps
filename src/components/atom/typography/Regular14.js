import React from 'react';
import {Text} from 'react-native';

const Regular14 = ({color, children, style}) => {
   return (
      <Text
         style={{
            color: color,
            fontSize: 14,
            fontFamily: 'Nunito-Regular',
            ...style
         }}>
         {children}
      </Text>
   );
};

export default Regular14;
