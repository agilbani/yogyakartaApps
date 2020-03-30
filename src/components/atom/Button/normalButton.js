import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const Button = ({backgroundColor, children, style, onPress, rounded}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.default,
          rounded ? styles.rounded : null,
          {backgroundColor: backgroundColor ? backgroundColor : null},
          style,
        ]}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 13,
    paddingVertical: 13,
    alignSelf: 'flex-start',
    backgroundColor: 'grey',
    borderRadius: 3,
    height: undefined,
    width: undefined,
  },
  rounded: {
    borderRadius: 100,
  },
});
