import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 5,
  },
  content: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  ic_arrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
