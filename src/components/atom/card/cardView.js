import React from 'react';
import {View} from 'react-native';
import styles from './cardStyle';
import styleShadow from '../../../styles/shadow';

const CardView = ({
   children,
   radius,
   paddingBottom,
   marginBottom,
   marginTop,
   borderColor,
   borderWidth,
   width,
 }) => {
   return (
     <View
       style={[
         styles.container,
         styleShadow.shadow,
         {
           width: width,
           borderColor: borderColor ? borderColor : null,
           borderWidth: borderWidth ? borderWidth : 0,
           marginBottom: marginBottom ? marginBottom : 5,
           borderRadius: radius,
           paddingBottom: paddingBottom ? paddingBottom : 0,
           marginTop: marginTop ? marginTop : 0,
         },
       ]}>
       {children}
     </View>
   );
 };
 
 export default CardView;