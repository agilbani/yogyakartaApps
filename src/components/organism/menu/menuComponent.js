import React from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MenuItem from '../../atom/itemMenu/itemMenu';

const MenuComponent = ({data, activeIndex, showItem, presSend, callCS}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <MenuItem
          onPress={() => showItem(index)}
          dataTitle={item.nama_menu}
          value={item.gambar}
          valueTitle={item.nama_menu}
          showValue={activeIndex === index ? true : false}
          changeIcon={activeIndex === index ? true : false}
          marginHorizontal={5}
        />
      )}
    />
  );
};

export default MenuComponent;
