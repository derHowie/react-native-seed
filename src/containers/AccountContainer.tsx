import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MenuButton } from '../components/base';

export default class TabThree extends Component {
  static navigationOptions = {
    title: 'Account',
    headerRight: <MenuButton color="black" inHeader />,
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
        <Text>Account</Text>
      </View>
    );
  }
}
