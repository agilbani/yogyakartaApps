import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DetailDestinationComponent from '../../../components/organism/home/detailDestinationComponent'
import { Actions } from 'react-native-router-flux'

export default class DetailDestination extends Component {
   state={
      headerHeight: 60
   }
   render() {
      return (
         <View style={{flex: 1}}>
            <DetailDestinationComponent
               data={this.props.data}
               that={this}
               back={() => Actions.pop()}
            />
         </View>
      )
   }
}
