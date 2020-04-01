import React from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import styles from './HeaderStyle';
import {Regular16, Regular14, Regular12} from '../typography/typography';
import Colors from '../../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({
  backgroundColor,
  title,
  onBack,
  rightItem,
  iconName,
  titlePosition,
  secondTitle,
}) => {
  return (
    <View style={[styles.container, backgroundColor && {backgroundColor}]}>
      <View style={styles.left}>
        {onBack && (
          <TouchableOpacity onPress={onBack}>
            {Platform.OS === 'android' ? (
              <Icon
                name={iconName ? iconName : 'keyboard-backspace'}
                size={25}
                color={Colors.white}
              />
            ) : (
              <Icon
                name={iconName ? iconName : 'keyboard-backspace'}
                size={25}
                color={Colors.white}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        {secondTitle ? (
          <View style={styles.secondTitle}>
            <Regular14 color={Colors.primaryCard} children={title} />
            <Regular12
              color={Colors.primaryCard}
              children={secondTitle}
              style={styles.secondTitleText}
            />
          </View>
        ) : (
          <Regular16
            color={Colors.white}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{alignSelf: titlePosition ? titlePosition : 'flex-start'}}
            children={title}
          />
        )}
      </View>
      <View style={styles.right}>{rightItem && rightItem()}</View>
    </View>
  );
};

export default Header;
