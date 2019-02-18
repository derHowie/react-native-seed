import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { MenuButton } from './';

const ICON_NAMES = {
  0: 'dot-single',
  1: 'dots-two-horizontal',
  2: 'dots-three-horizontal',
};

function TabIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon
        name={props.name}
        size={36}
        color={props.selected ? 'red' : 'white'}
      />
    </TouchableOpacity>
  );
}

interface IProps {
  navigation: any;
}

export default class TabBar extends Component<IProps, {}> {
  getNavigateToTab = (routeName: string): (() => void) => () => {
    const { navigate } = this.props.navigation;
    navigate(routeName);
  };

  renderTabBarIcon = (route, index: number): React.ReactChild => {
    const selected = index === this.props.navigation.state.index;
    return (
      <TabIcon
        name={ICON_NAMES[index]}
        key={`TabBar-${index}`}
        selected={selected}
        onPress={this.getNavigateToTab(route.routeName)}
      />
    );
  };

  renderTabBarIcons(): React.ReactChild[] {
    const { routes } = this.props.navigation.state;
    return routes.map((route, index) => this.renderTabBarIcon(route, index));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTabBarIcons()}
        <MenuButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 16,
    backgroundColor: 'black',
  },
});
