import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './style';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Regular18, Regular14, Bold18} from '../../atom/typography/typography';
import Colors from '../../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContentDetailDestination = ({
  that,
  data,
  back
}) => {
  return (
   <ParallaxScrollView
      backgroundColor={'#5EA9DD'}
      headerBackgroundColor= "#333"                    
      stickyHeaderHeight={ that.state.headerHeight }
      parallaxHeaderHeight={200}
      backgroundSpeed={20}
      renderForeground={() => (
         <Image
            source={{uri: data.image}}
            style={{height: 200, width: '100%', resizeMode: 'cover'}}
         />
      )}
      renderStickyHeader={() => (
         <View style={{ padding: 10 }} onLayout={(e) => that.setState({ headerHeight: e.nativeEvent.layout.height }) }>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
               <TouchableOpacity onPress={back} style={{ elevation: 3 }}>
                  <Icon
                     name={'arrow-left'}
                     size={25}
                     color={Colors.white}
                  />
               </TouchableOpacity>
               <Regular18 color={Colors.white} style={{marginLeft: 15}}>
                  {data.title}
               </Regular18>
            </View>
         </View>
      )}
   >
      <View style={{ paddingVertical: 15, paddingHorizontal: 15, backgroundColor: Colors.white }}>
         <Bold18 color={Colors.black} style={{marginTop: 15}}>Deskripsi</Bold18>
         <Regular14>{data.description}</Regular14>
      </View>
   </ParallaxScrollView>
  );
};

export default ContentDetailDestination;
