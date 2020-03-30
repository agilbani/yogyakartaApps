import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import ModalWrapper from 'react-native-modal-wrapper';
import Regular16 from '../typography/Regular16';
import Colors from '../../../styles/colors';

const Drawer = ({visible, setState, confirm, state, props}) => {
  return (
    <ModalWrapper
      isNative={false}
      onRequestClose={() => setState('show', false)}
      position="left"
      shouldAnimateOnRequestClose={true}
      showOverlay={true}
      style={{
        width: '35%',
        height: Dimensions.get('window').height,
        position: 'absolute',
        left: 0,
        top: 0,
      }}
      transparent={true}
      animationDuration={700}
      visible={visible}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '100%',
          padding: 15,
        }}>
        <TouchableOpacity
          onPress={confirm}
          style={{
            borderBottomColor: Colors.black,
            borderBottomWidth: 1,
            paddingBottom: 7,
          }}>
          <Regular16 color={Colors.black}>Menu</Regular16>
        </TouchableOpacity>
      </View>
    </ModalWrapper>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  title: {
    color: '#231f20',
  },
  form: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#9b9b9b',
    justifyContent: 'space-between',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
});
