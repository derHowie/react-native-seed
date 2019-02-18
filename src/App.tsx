import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigator from './navigation/DrawerNavigator';
import { LandingContainer } from './containers';
import LoginStackNavigator from './navigation/LoginStackNavigator';

const AppWithLogin = createSwitchNavigator(
  {
    Landing: LandingContainer,
    Main: MainNavigator,
    Login: LoginStackNavigator,
  },
  {
    initialRouteName: 'Landing',
  }
);

const AppContainer = createAppContainer(AppWithLogin);

export default function App(): JSX.Element {
  return <AppContainer />;
}
