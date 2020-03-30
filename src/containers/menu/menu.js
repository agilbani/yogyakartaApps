import React from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {Tabs, Tab} from 'native-base';
import {Regular16} from '../../components/atom/typography/typography';
import Colors from '../../styles/colors';
import MenuComponent from '../../components/organism/menu/menuComponent';
import action from '../../redux/action';
import {connect} from 'react-redux';

const tabStyle = {
  tabStyle: {backgroundColor: 'white', marginTop: -3, width: 10},
  textStyle: {color: '#828282', fontSize: 12},
  activeTabStyle: {backgroundColor: 'white', marginTop: -3},
  activeTextStyle: {color: '#333333', fontSize: 13},
};

class Menu extends React.Component {
  state = {
    data: [
      {
        title: 'ini title',
        value: 'ini value',
      },
      {
        title: 'ini title',
        value: 'ini value',
      },
      {
        title: 'ini title',
        value: 'ini value',
      },
    ],
    newData: [],
    activeIndex: undefined,
  };

  componentDidMount() {
    this.props.dispatch(
      action.getMenu(
        this.props.auth.clientToken.token_type,
        this.props.auth.clientToken.access_token,
      ),
    );
  }

  componentWillReceiveProps(props) {
    console.log('sukses menu', props);

  }

  render() {
    return (
      <ScrollView style={{backgroundColor: Colors.white}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.setState({show: true})}
            style={{padding: 3, width: '10%'}}>
            <Image
              style={styles.img}
              source={require('../../assets/komponen/NavDrawerBlack.png')}
            />
          </TouchableOpacity>
          <Regular16 style={styles.title} color={Colors.black}>
            Menu
          </Regular16>
          <View style={{width: '10%'}} />
        </View>
        {
          this.props.app.dataMenu && <Tabs tabBarUnderlineStyle={{backgroundColor: '#2E3284', height: 2}}>
          <Tab
            heading={Object.keys(this.props.app.dataMenu.menu)[1]}
            {...tabStyle}>
            <MenuComponent
              showItem={index => this.setIndex(index)}
              activeIndex={this.state.activeIndex}
              data={this.props.app.dataMenu.menu.Cakes}
            />
          </Tab>
          <Tab
            heading={Object.keys(this.props.app.dataMenu.menu)[2]}
            {...tabStyle}>
            <MenuComponent
              showItem={index => this.setIndex(index)}
              activeIndex={this.state.activeIndex}
              data={this.props.app.dataMenu.menu.Coffee}
            />
          </Tab>
          <Tab
            heading={Object.keys(this.props.app.dataMenu.menu)[12]}
            {...tabStyle}>
            <MenuComponent
              showItem={index => this.setIndex(index)}
              activeIndex={this.state.activeIndex}
              data={this.props.app.dataMenu.menu.Tea}
            />
          </Tab>
        </Tabs>
        }
      </ScrollView>
    );
  }

  setIndex = index => {
    if (this.state.activeIndex === index) {
      this.setState({
        activeIndex: undefined,
      });
    } else {
      this.setState({
        activeIndex: index,
      });
    }
  };
}

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
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
});

const mapStateToProps = ({auth, app}) => ({
  auth,
  app,
});

export default connect(mapStateToProps)(Menu);
