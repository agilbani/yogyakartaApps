import React, {Component} from 'react';
import {Alert} from 'react-native';
import LoginComponent from '../../components/organism/auth/loginComponent';
import action from '../../redux/action';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

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
  }

  render() {
    return (
      <LoginComponent
        loading={this.state.loading}
        that={this}
        pressLogin={() => this.login()}
      />
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
        token_type: this.props.auth.clientToken.token_type,
        access_token: this.props.auth.clientToken.access_token,
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
