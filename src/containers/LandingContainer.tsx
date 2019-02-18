import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

const delay = async (ms: number) =>
  new Promise((res: (any) => void) => setTimeout(() => res(false), ms));

type Props = {
  navigation: any;
};

export default class LandingContainer extends Component<Props, {}> {
  componentDidMount() {
    this.getAuth();
  }

  async getAuth() {
    const auth = await delay(1500);
    this.props.navigation.navigate(auth ? 'Main' : 'Login');
  }

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
        <Text>Landing Screen</Text>
        <ActivityIndicator />
      </View>
    );
  }
}
