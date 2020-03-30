import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Regular12,
  Regular16,
  Regular14,
} from '../../atom/typography/typography';
import Colors from '../../../styles/colors';
import Input from '../../atom/FieldInput/input';
import Button from '../../atom/Button/normalButton';
import Loading from '../../atom/loading/customLoading';

const loginComponent = ({
  that,
  pressLogin,
  loading,
  signUpPress,
  forgotPress,
}) => {
  return (
    <ImageBackground
      style={styles.container}
      resizeMethod="resize"
      source={require('../../../assets/komponen/BackgroundLogin.jpg')}>
      <Loading show={loading} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => this.setState({show: true})}
          style={{padding: 3, width: '10%'}}>
          <Image
            style={styles.img}
            source={require('../../../assets/komponen/NavDrawerBlack.png')}
          />
        </TouchableOpacity>
        <Regular16 style={styles.title} color={Colors.white}>
          Good Morning
        </Regular16>
        <View style={{width: '10%'}} />
      </View>
      <View style={styles.content}>
        <Input
          onChangeText={text => that.setState({email: text})}
          textLabel="Email Address"
          width={'100%'}
        />
        <Input
          onChangeText={text => that.setState({password: text})}
          secureTextEntry={true}
          textLabel="Password"
          width={'100%'}
          marginTop={10}
        />
        <Button
          onPress={pressLogin}
          backgroundColor={Colors.success}
          style={styles.btnLogin}>
          <Regular12 color={Colors.white}>LOGIN</Regular12>
        </Button>
        <View style={styles.regis}>
          <Regular14 color={Colors.white}>Not Registered yet ? </Regular14>
          <TouchableOpacity style={{marginLeft: 4}}>
            <Regular14 color={Colors.white}>Sign Up Here</Regular14>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{alignSelf: 'center', marginTop: 15}}>
          <Regular14 color={Colors.white}>Forgot Password</Regular14>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default loginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  regis: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  content: {
    width: '95%',
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  btnLogin: {
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    alignSelf: 'center',
  },
});
