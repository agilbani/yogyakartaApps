import React from 'react';
import {Text} from 'react-native';

const Bold18 = ({color, children, style}) => {
   return (
      <Text
         style={{
            color: color,
            fontSize: 18,
            fontFamily: 'Nunito-Bold',
            ...style
         }}>
         {children}
      </Text>
   );
};

export default Bold18;
