import React from 'react';
import {Text} from 'react-native';

const Bold14 = ({color, children, style}) => {
   return (
      <Text
         style={{
            color: color,
            fontSize: 14,
            fontFamily: 'Nunito-Bold',
            ...style
         }}>
         {children}
      </Text>
   );
};

export default Bold14;
