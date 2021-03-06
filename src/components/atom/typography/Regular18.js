import React from 'react';
import {Text} from 'react-native';

const Regular18 = ({color, children, style}) => {
   return (
      <Text
         style={{
            color: color,
            fontSize: 18,
            fontFamily: 'Nunito-Regular',
            ...style
         }}>
         {children}
      </Text>
   );
};

export default Regular18;
