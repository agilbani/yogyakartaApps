import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {},
  textLabel: {
    margin: 3,
  },
  content: {
    flexDirection: 'row',
    borderRadius: 2,
    alignItems: 'center',
    height: 40,
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 5,
  },
  textInput: {
    paddingHorizontal: 10,
    width: '90%',
    height: '100%',
  },
  borderInput: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#bdbdbd',
    paddingHorizontal: 10
  },
  image: {
    width: '10%',
    height: '100%',
    resizeMode: 'contain',
  },
  shadow: {
    paddingHorizontal: 10,
    //shadow
    elevation: 3,
    borderColor: 'darkgrey',
    shadowColor: 'darkgrey',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  white: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  greyInactive: {
    backgroundColor: Colors.inactiveButton,
    paddingHorizontal: 10,
  },
});

export default styles;
