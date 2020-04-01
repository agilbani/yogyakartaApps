import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import RegisterComponent from '../../components/organism/auth/registerComponent';
import action from '../../redux/action';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Colors from '../../styles/colors';
import Loading from '../../components/atom/loading/customLoading';

class Register extends Component {
   state={
      email: '',
      nama: '',
      password: '',
      confirmation_password: '',
      loading: false,
   }

   componentWillReceiveProps(props) {
      if(props.auth.registerSuccess) {
         Alert.alert(
            'Register Sukses',
            'Silahkan Login untuk masuk',
            [
              {text: 'OK', onPress: () => {Actions.reset('Login'), this.props.dispatch(action.logout())}},
            ],
              {cancelable: false},
         );
      }

      if(props.auth.registerError) {
         this.setState({loading: false});
         Alert.alert(
            'Register Gagal',
            'Email sudah digunakan',
            [
              {text: 'OK', onPress: () => this.props.dispatch(action.logout())},
            ],
              {cancelable: false},
         );
      }
   }
   render() {
      return (
         <View style={{flex: 1}}>
            <Loading show={this.state.loading} />
            <RegisterComponent
               that={this}
               signUpPress={() => this.signUp()}
            />
         </View>
      )
   }

   signUp = () => {
      const {nama, email, password, confirmation_password} = this.state;

      if(!nama || !email || !password || !confirmation_password) {
         Alert.alert(
            'Data tidak boleh kosong, silahkan periksa kembali',
            '',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
              {cancelable: false},
         );
      } else if (password !== confirmation_password) {
         Alert.alert(
            'Password tidak sama, silahkan periksa kembali',
            '',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
              {cancelable: false},
          );
      } else {
         const body = {
            name: nama,
            email: email,
            password: password,
            c_password: confirmation_password
         }
         this.props.dispatch(action.register(body))
         this.setState({loading: true})
      }
   }
}

const mapStateToProps = ({auth}) => ({
   auth,
 });
 
 export default connect(mapStateToProps)(Register);
