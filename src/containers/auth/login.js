import React, {Component} from 'react';
import {Alert, View} from 'react-native';
import LoginComponent from '../../components/organism/auth/loginComponent';
import action from '../../redux/action';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Colors from '../../styles/colors';
import Loading from '../../components/atom/loading/customLoading';

class login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
  };

  componentWillReceiveProps(props) {
    console.log('sukses login', props);
    if (props.auth.isLoggedIn) {
      this.setState({loading: false});
      Actions.reset('Home');
    }

    if (props.auth.loginError) {
      this.setState({loading: false});
      Alert.alert(
        'Username atau Password Salah.',
        '',
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
        <LoginComponent
          that={this}
          pressLogin={() => this.login()}
          signUpPress={() => Actions.Register()}
          // signUpPress={() => this.props.dispatch(action.logout())}
        />
      </View>
    );
  }

  login = () => {
    const {email, password} = this.state;
    if(!email || !password) {
      Alert.alert(
        'Data tidak boleh kosong, silahkan periksa kembali',
        '',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
          {cancelable: false},
      );
    } else {
      const body = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.dispatch(action.login(body));
      this.setState({loading: true});
    }
  };
}

const mapStateToProps = ({auth}) => ({
  auth,
});

export default connect(mapStateToProps)(login);
