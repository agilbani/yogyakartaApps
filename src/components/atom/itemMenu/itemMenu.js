import React from 'react';
import {View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import styles from './itemStyle';
import {Bold12} from '../typography/typography';
import Colors from '../../../styles/colors';

const MenuItem = ({
  onPress,
  dataTitle,
  value,
  valueTitle,
  showValue,
  changeIcon,
  marginVertical,
  marginHorizontal,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {marginVertical, marginHorizontal}]}>
      <View style={styles.content}>
        <Bold12 style={{width: '90%'}} color={Colors.black}>
          {dataTitle}
        </Bold12>
        <Image
          style={[
            styles.ic_arrow,
            {transform: [{rotate: changeIcon ? '180deg' : '0deg'}]},
          ]}
          source={require('../../../assets/komponen/ArrowMenu.png')}
        />
      </View>
      {showValue ? (
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: Colors.greyFacebook,
            width: 120,
            justifyContent: 'center',
            paddingBottom: 4,
          }}>
          <Image
            source={{uri: value}}
            style={{width: '100%', height: 100}}
            resizeMode="cover"
          />
          <Bold12
            style={{width: '100%', marginHorizontal: 10}}
            color={Colors.black}>
            {valueTitle}
          </Bold12>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
export default MenuItem;
