import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Loading from '../../../components/atom/loading/customLoading'
import DestinationComponent from '../../../components/organism/home/destinationComponent'
import { Actions } from 'react-native-router-flux'
import {connect} from 'react-redux'
import action from '../../../redux/action'

class Destination extends Component {
   state = {
      loading: false,
      page: 1,
      data: []
   }

   componentDidMount() {
      console.log('dest', this.props);
      this.props.dispatch(action.getDestination(this.state.page, this.props.auth.dataLogin.data.token))
   }

   componentWillReceiveProps(props) {
      console.log('new props', props);
      if (props.app.dataDestination) {
         this.setState({data: props.app.dataDestination})
      }
   }
   render() {
      return (
         <View style={{flex: 1}}>
            <Loading show={this.state.loading} />
            <DestinationComponent 
               data={this.state.data}
               loadMore={() => this.regetData()} 
               back={()=> Actions.pop()} 
               that={this}
               onPress={item => Actions.DetailDestination({data: item})}
            />
         </View>
      )
   }

   regetData = () => {
      const {page} = this.state;
      this.setState({page: page+1})
      this.props.dispatch(action.getDestination(page, this.props.auth.dataLogin.data.token))
   }
}

const mapStateToProps = ({app, auth}) => ({
   app,
   auth
 });
 
 export default connect(mapStateToProps)(Destination);