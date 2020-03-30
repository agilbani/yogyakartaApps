import React from 'react';
import {Text} from 'react-native';

const Bold24 = ({color, children, style}) => {
   return (
      <Text
         style={{
            color: color,
            fontSize: 24,
            fontFamily: 'Nunito-Bold',
            ...style
         }}>
         {children}
      </Text>
   );
};

export default Bold24;
