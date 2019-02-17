import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

class TabOne extends Component<{ navigation: any }> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <TouchableOpacity onPress={() => navigate('ScreenTwo')}>
          <Text style={{ color: 'white' }}> Tab One : Screen 1 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ScreenTwo extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text style={{ color: 'white' }}> Tab One : Screen 2 </Text>
      </View>
    );
  }
}

const TabOneNav = createStackNavigator({
  ScreenOne: TabOne,
  ScreenTwo,
});

class TabTwo extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}> Tab Two </Text>
      </View>
    );
  }
}

class TabThree extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}> Tab Three </Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
    TabOneNav,
    TabTwo,
    TabThree,
});

class HomeScreen extends Component<{ navigation: any }, {}> {
  static router = TabNavigator.router;
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return <TabNavigator navigation={this.props.navigation}/>;
  }
}

class OtherScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Other Screen',
  };  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}> Other Screen </Text>
      </View>
    );
  }
}

const MyDrawerNavigator = createAppContainer(
  createDrawerNavigator({
    HomeScreen,
    OtherScreen,
  })
);

class App extends Component<Props, {}> {
  public render() {
    return <MyDrawerNavigator />;
  }
}

export default App;
