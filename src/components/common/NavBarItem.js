import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../../themes/colors';
class NavBarItem extends Component {
  render() {
    const { iconName, onPress } = this.props;
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 20}}
        onPress={() => onPress()}
      >
        <Icon name={iconName} size={20} color={Colors.white} />
      </TouchableOpacity>

    );
  }
}

NavBarItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default NavBarItem;
