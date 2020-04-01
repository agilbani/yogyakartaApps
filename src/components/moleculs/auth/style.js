import {StyleSheet} from 'react-native'
import Colors from '../../../styles/colors';

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: Colors.lightBlue,
     justifyContent: 'center'
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
   btnLogin: {
     width: '90%',
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center',
     marginVertical: 20,
     alignSelf: 'center',
   },
   img: {
      width: 35,
      height: 35,
      resizeMode: 'contain'
   },
   form: {
    marginTop: 20, 
    width: '90%', 
    alignSelf: 'center',
    justifyContent: 'center', 
    alignItems: 'center'
    },
    btnSignUp: {
      padding: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15
    }
 });
 
 export default styles;