import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MenuButton } from '../components/base';

export default class TabTwo extends Component {
  static navigationOptions = {
    title: 'TabTwo',
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
        <Text>Tab Two</Text>
      </View>
    );
  }
}