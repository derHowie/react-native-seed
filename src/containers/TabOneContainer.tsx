import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MenuButton } from '../components/base';

export default class TabOne extends Component {
  static navigationOptions = {
    title: 'TabOne',
    headerRight: <MenuButton />,
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text>Home Screen</Text>
      </View>
    );
  }
}
