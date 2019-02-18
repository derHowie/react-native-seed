import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TabOneStackNavigator from './TabOneStackNavigator';
import TabTwoStackNavigator from './TabTwoStackNavigator';
import TabThreeStackNavigator from './TabThreeStackNavigator';
import { TabBar } from '../components/base';

const TabNavigator = createBottomTabNavigator(
  {
    TabOne: TabOneStackNavigator,
    TabTwo: TabTwoStackNavigator,
    TabThree: TabThreeStackNavigator,
  },
  {
    tabBarComponent: TabBar,
  }
);

interface IProps {
  navigation: any;
}

export default class TabNavigatorContainer extends Component<IProps, {}> {
  static router = TabNavigator.router;
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return <TabNavigator navigation={this.props.navigation} />;
  }
}
