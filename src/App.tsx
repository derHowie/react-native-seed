import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
});

interface Props {
  getUserData: (str: String) => void;
  user: any;
}
class App extends Component<Props> {
  componentDidMount() {
    this.props.getUserData('foo@bar.io');
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Template!</Text>
        <Text style={styles.welcome}>{`Your email is: ${this.props.user.email}`}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const bindActions = (dispatch: (action: Object) => void) => {
  return {
    getUserData: (str: String) => dispatch({ type: 'GET_USER_DATA', email: str }),
  };
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, bindActions)(App);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
