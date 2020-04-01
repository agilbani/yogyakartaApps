import {StyleSheet} from 'react-native'
import Colors from '../../../styles/colors';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.white
   },
   accountContainer: {
      flex: 1,
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center'
   },
   menuView: {
      width: '90%',
      marginTop: 20,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10
   },
   icDes: {
      width: 140, 
      height: 90, 
      resizeMode:'contain'
   },
   viewImage: {
      width: 50,
      height: 50,
      borderRadius: 50/2,
      backgroundColor: Colors.primary,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
   },
   img: {
      width: 35,
      height: 35,
      resizeMode: 'contain'
   },
   btnLogin: {
      width: '80%',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      alignSelf: 'center',
   },
});
 
export default styles;