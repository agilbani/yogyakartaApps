/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SwiperHome = ({progress, data, activeDotIndex, that}) => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoplay
        itemHeight={200} 
        autoplayInterval={4000}
        data={data}
        onSnapToItem={index => that.setState({activeDotIndex: index})}
        renderItem={value => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                backgroundColor: '#FFF',
              }}>
              <Image
                style={styles.img}
                source={{uri: value.item.image}}
              />
            </View>
          );
        }}
        sliderWidth={Dimensions.get('window').width}
        sliderHeight={200}
        itemWidth={Dimensions.get('window').width}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeDotIndex}
        containerStyle={{paddingVertical: 8, alignSelf: 'flex-start'}}
        dotColor={'#3282B8'}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'#DADADA'}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

const {width, height} = Dimensions.get('window');
export default SwiperHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 250
  },
  child: {
    height: height * 0.4,
    width,
  },
  img: {
    backgroundColor: '#000',
    width: '100%',
    height: 210,
    resizeMode: 'stretch',
  },
  image: {
    height: height * 0.5,
    width,
  },
  images: {
    width: '100%',
    height: undefined,
    aspectRatio: 512 / 220,
    resizeMode: 'cover',
  },
  activeButton: {
    backgroundColor: '#ddd',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -5,
  },
});
