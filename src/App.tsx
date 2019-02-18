import React from 'react';
import { createAppContainer } from 'react-navigation';
import DrawerNavigator from './navigation/DrawerNavigator';

const AppContainer = createAppContainer(DrawerNavigator);

export default function App() {
  return <AppContainer />;
}
