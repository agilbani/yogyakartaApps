import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: Colors.primaryMain,
  },
  left: {
    width: '10%',
  },
  center: {
    width: '80%',
    marginTop: 5,
  },
  right: {
    width: '10%',
  },
  secondTitle: {
  },
  secondTitleText: {
    marginLeft: 3
  }
});

export default styles;
