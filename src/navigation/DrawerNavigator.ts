import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import { AccountContainer } from '../containers';

const AccountStackNavigator = createStackNavigator({
  AccountHome: AccountContainer,
});

export default createDrawerNavigator({
  Home: TabNavigator,
  Account: AccountStackNavigator,
});
