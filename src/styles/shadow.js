import {
   StyleSheet
} from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
    shadow: {
      shadowColor: Colors.blue4,
      shadowOffset: {
      width: 3,
      height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 10,
      borderTopWidth: 1,
      borderTopColor: 'rgba(46, 50, 132, 0.15)',
    },
    shadowTop: {
      shadowColor: Colors.blue4,
      shadowOffset: {
      width: 3,
      height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      borderTopWidth: 0.5,
      borderTopColor: 'rgba(46, 50, 132, 0.15)',
    },
});

export default styles;