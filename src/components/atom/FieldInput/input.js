import React from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './style'
import {Regular12} from '../typography/typography';

const FormInput = ({
  textLabel,
  colorText,
  onChangeText,
  value,
  placeholder,
  placeholderTextColor,
  editable,
  keyboardType,
  sourceImageLeft,
  sourceImageRight,
  type,
  width,
  marginTop,
  secureTextEntry,
}) => {
  return (
    <View style={[{width: width, marginTop: marginTop}, styles.container]}>
      {textLabel && (
        <View style={[styles.textLabel]}>
          <Regular12 color={colorText}>{textLabel}</Regular12>
        </View>
      )}
      <View style={[styles.content, type ? styles[type] : false]}>
        {sourceImageLeft && (
          <Image source={sourceImageLeft} style={[styles.image]} />
        )}
        <TextInput
          style={[
            sourceImageLeft || sourceImageRight
              ? styles.textInput
              : styles.borderInput,
          ]}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          editable={editable}
          keyboardType={keyboardType}
        />
        {sourceImageRight && (
          <Image source={sourceImageRight} style={[styles.image]} />
        )}
      </View>
    </View>
  );
};

export default FormInput;
