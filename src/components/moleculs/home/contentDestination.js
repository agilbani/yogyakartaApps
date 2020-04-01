import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
} from 'react-native';

import styles from './style';
import {Regular18, Regular14, Bold18} from '../../atom/typography/typography';
import Colors from '../../../styles/colors';
import CardButton from '../../atom/card/cardButton';

const ContentDestination = ({
  that,
  data,
  loadMore,
  press
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        onMomentumScrollEnd={loadMore}
        keyExtractor={ (item, index) => item.id}
        renderItem={({ item, index }) => (
          <CardButton onPress={() => press(item)} width={'90%'} radius={7} marginTop={20}>
            <View style={{width: '100%', flexDirection: 'row'}}>
              <View style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={{uri: item.image}} style={{width: '100%', height: 80, resizeMode: 'stretch'}} />
              </View>
              <View style={{width: '70%', paddingHorizontal: 10}}>
                <Bold18 color={Colors.blackText}>{item.title}</Bold18>
                <Regular14 numberOfLines={3} color={Colors.greyText} style={{width: '100%'}}>{item.description}</Regular14>
              </View>
            </View>
          </CardButton>
        )}
    />
    </View>
  );
};

export default ContentDestination;
