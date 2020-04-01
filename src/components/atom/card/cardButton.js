import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './cardStyle';
import styleShadow from '../../../styles/shadow';

const CardButton = ({
   children,
   radius,
   paddingVertical,
   marginBottom,
   marginTop,
   borderColor,
   borderWidth,
   width,
   onPress,
 }) => {
   return (
     <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styleShadow.shadow,
        {
          width: width,
          borderColor: borderColor ? borderColor : null,
          borderWidth: borderWidth ? borderWidth : 0,
          marginBottom: marginBottom ? marginBottom : 5,
          borderRadius: radius,
          paddingVertical: paddingVertical ? paddingVertical : 0,
          marginTop: marginTop ? marginTop : 0,
        },
      ]}>
      {children}
     </TouchableOpacity>
   );
 };
 
 export default CardButton;