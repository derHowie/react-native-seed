import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MenuButton } from '../components/base';

export default class LoginContainer extends Component {
  static navigationOptions = {
    title: 'Login',
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
        <Text>Login</Text>
      </View>
    );
  }
}
