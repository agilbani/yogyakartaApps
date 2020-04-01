import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import AccountComponent from '../../../components/organism/home/accountComponent'
import { Actions } from 'react-native-router-flux'
import {connect} from 'react-redux'
import action from '../../../redux/action'
import Loading from '../../../components/atom/loading/customLoading'

class Account extends Component {
   state={
      loading: false
   }

   componentWillReceiveProps(props) {
      this.setState({loading: false})
      if(props.auth.logoutSuccess) {
         Alert.alert(
            `${props.auth.message}`,
            '',
            [
              {text: 'OK', onPress: () => Actions.reset('Login')},
            ],
            {cancelable: false},
         );
      }
   }
   render() {
      return (
         <View style={{flex: 1}}>
            <Loading show={this.state.loading} />
            <AccountComponent 
               data={this.props.auth}
               back={()=> Actions.pop()} 
               that={this}
               logout={() => this.logout()}
            />
         </View>
      )
   }

   logout = () => {
      // this.setState({loading: true})
      this.props.dispatch(action.logoutApi(this.props.auth.dataLogin.data.token))
   }
}

const mapStateToProps = ({auth}) => ({
   auth,
 });
 
 export default connect(mapStateToProps)(Account);