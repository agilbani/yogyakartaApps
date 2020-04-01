import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
import {Regular18, Regular14, Bold18} from '../../atom/typography/typography';
import Colors from '../../../styles/colors';
import SwiperHome from '../../atom/swiperImage/swipperImage'; 
import CardButton from '../../atom/card/cardButton';

const ContentHome = ({
  that,
  destinationPress,
  accountPress
}) => {
  return (
    <View style={styles.container}>
      <SwiperHome
        activeDotIndex={that.state.activeDotIndex}
        that={that}
        data={that.state.dataImage}
      />
      <Bold18 color={Colors.black} style={{marginTop: 15, alignSelf: 'center'}}>Selamat Datang Di Kota Yogyakarta</Bold18>
      <View style={styles.menuView}>
        <CardButton onPress={destinationPress} paddingVertical={8} width={'45%'} radius={6}>
          <Image onLayout={event =>
            that.setState({
              heightRoute: event.nativeEvent.layout.height,
            })
          } source={require('../../../assets/icon/destination_ic.png')} style={styles.icDes} />
          <Regular18 style={{alignSelf: 'center', marginTop: 10}}>Destinasi</Regular18>
        </CardButton>
        <CardButton onPress={accountPress} width={'45%'} radius={6}>
          <Image source={require('../../../assets/icon/akun_ic.png')} style={{width: 80, height: that.state.heightRoute + 17, resizeMode: 'contain', alignSelf: 'center'}} />
          <Regular18 style={{alignSelf: 'center', marginTop: 10}}>Akun</Regular18>
        </CardButton>
      </View>
    </View>
  );
};

export default ContentHome;
