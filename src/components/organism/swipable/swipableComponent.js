import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Regular12,
  Regular16,
  Regular14,
  Bold18,
  Bold12,
  Bold14,
} from '../../atom/typography/typography';
import Colors from '../../../styles/colors';

const swipableComponent = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Bold18>Prime To Pay</Bold18>
      </View>
      <Regular16 color={Colors.greyText}>
        Show below QR Code to the cashier
      </Regular16>
      <Bold14>Kartu Satu</Bold14>
      <View style={styles.price}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Regular14 color="#00e676">Balance</Regular14>
          <Regular14 color={Colors.blackText}>
            IDR {data ? data.balance : '0'}
          </Regular14>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Regular14 color="#00e676">Beans</Regular14>
          <Regular14 color={Colors.blackText}>
            {data ? data.beans : '0'}
          </Regular14>
        </View>
      </View>
      {data ? (
        <Image
          source={{uri: data ? data.primaryCard.barcode : 'https://laptopnesia.com/wp-content/uploads/2019/01/Cara-Membuat-Barcode-5-1.jpg'}}
          resizeMode="contain"
          style={{width: 200, height: 200, alignSelf: 'center', marginTop: 15}}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    marginTop: -5,
    // paddingVertical: 7,
  },
  title: {
    width: '100%',
    paddingBottom: 8,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
  price: {
    width: '80%',
    flexDirection: 'column',
  },
});

export default swipableComponent;
