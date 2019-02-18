import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';

interface IProps {
  color?: string;
  inHeader?: boolean | undefined;
  navigation: any;
}

class MenuButton extends Component<IProps, {}> {
  static defaultProps = {
    color: 'white',
  };

  getContainerStyle() {
    return !this.props.inHeader ? null : { paddingRight: 16 };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.navigation.openDrawer}
        style={this.getContainerStyle()}
      >
        <Icon name="dots-three-vertical" size={30} color={this.props.color} />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(MenuButton);
