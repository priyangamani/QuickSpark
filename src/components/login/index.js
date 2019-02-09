import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView
} from 'react-native';
import * as Colors from '../../themes/colors';
import { getEmptyHeader } from '../../utils/navigation';
import * as ducks from '../../ducks';
import { connect } from 'react-redux';

import loginStyles from '../styles/login';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginScreen extends Component {

  login() {
    const { updateCurrentUser } = this.props;
    updateCurrentUser({ name: 'user' });
    console.log('login');
  }

  render() {
    const customTextButton = (
      <Icon.Button name="facebook" backgroundColor={Colors.darkblue}>
        <Text style={loginStyles.loginFbText}>Login with Facebook</Text>
      </Icon.Button>
    );
    return (
      <View style={loginStyles.container}>
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View style={loginStyles.iconStyle}>
            <Icon
              raised
              size={36}
              name='star'
              type='font-awesome'
              color={Colors.white} />
          </View>
          <Text style={loginStyles.headertitle}>quickspark</Text>
          <TextInput style={loginStyles.inputContainer} placeholder="Username" placeholderTextColor={Colors.ash} />
          <TextInput style={loginStyles.inputContainer} secureTextEntry={true} placeholder="Password" placeholderTextColor={Colors.ash} />
          <TouchableOpacity onPress={() => this.login()}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={loginStyles.pwd}>Forgot Password</Text>
              <Text style={loginStyles.formSubmit}>Login</Text>
            </View>
          </TouchableOpacity>
          {customTextButton}
        </ScrollView>

      </View>
    );
  }
}



LoginScreen.navigationOptions = ({ navigation }) => getEmptyHeader();

const mapStateToProps = store => ({
  currentUser: store.currentUser,
});

const mapDispatchToProps = {
  updateCurrentUser: ducks.updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
