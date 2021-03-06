import React from 'react';
import {Text} from 'react-native';

const Bold32 = ({color, children, style}) => {
   return (
      <Text
         style={{
            color: color,
            fontSize: 32,
            fontFamily: 'Nunito-Bold',
            ...style
         }}>
         {children}
      </Text>
   );
};

export default Bold32;
