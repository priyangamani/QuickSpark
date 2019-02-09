import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Button,
  Alert, Image,
  Dimensions
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Colors from '../../themes/colors';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { QRCode } from 'react-native-custom-qr-codes';
import { ListItem } from 'react-native-elements'
import { Switch } from 'react-native-switch';
import Styles from '../styles/scanner';


class CodeScreen extends Component {

  generateQR() {
    console.log(this.state.text);
    Alert.alert("Qr Code genereated Sucessfully");
  }

  onListItem(index) {
    if (index == 1) {
      this.props.navigation.navigate('ColorPicker');
    }
    else if (index == 2) {
      this.props.navigation.navigate('Photo');

    }
    else if (index == 4) {
      this.props.navigation.navigate('FrameScreen');

    }
  }

  constructor(props) {
    super(props);
    this.state = {
      text: 'http://facebook.github.io/react-native/',
      isActive: true,
      QrbackgroundColor: Colors.pink,
      isHidden: false,
      timePassed: false,
      itemPressed: 'none',
    };

  }

  componentDidMount() {
    setTimeout(() => { this.setState({ timePassed: true }) }, 10);
    const { state } = this.props.navigation;
    let Qrcodelink = state.params ? state.params.Qrcodelink : this.state.text;
    if (Qrcodelink != this.state.text) {
      this.setState({
        timePassed: true
      })
      if (Qrcodelink != undefined) {
        this.setState({
          text: Qrcodelink
        })
      }
    }

  }

  componentDidUpdate(previousProps, previousState) {
    console.log(previousState);
  }

  componentWillUpdate(nextProps, nextState) {

  }

  displayQRCode() {
    if (this.state.timePassed) {
      const { state } = this.props.navigation;
      var photoLoad = state.params ? state.params.logo : "data:image/gif;base64,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";
      var bg = state.params ? state.params.bg : "";
      var colorPicker = state.params ? state.params.colorPicker : Colors.pink;
      if (!this.state.isHidden) {
        return (<View style={Styles.section}  >
          <QRCode content={this.state.text} codeStyle='dot' color={Colors.pink} outerEyeStyle='circle' innerEyeStyle='diamond'
            linearGradient={['rgb(255,0,0)', 'rgb(0,255,255)']} size={this.state.isHidden ? 0 : 200} backgroundColor={colorPicker}
            logo={{ uri: photoLoad }} />
        </View>);
      }
    }
    else {
      return (
        <View style={Styles.section}  >
          <ActivityIndicator
            color={Colors.pink}
            size="large"
            style={Styles.activityIndicator}
          />
        </View>
      )
    }
  }



  render() {
    const list = [
      {
        name: 'Set Colors',
        icon: 'add',
        id: '1'

      },
      {
        name: 'Add Logo Image',
        icon: 'add',
        id: '2'
      },
      {
        name: 'Customize Shape',
        icon: 'add',
        id: '3'

      },
      {
        name: 'Frame',
        icon: 'add',
        id: '4'

      },

    ]


    return (

      <View style={Styles.container}>
        <View style={Styles.viewcontainer}>
          <Text style={Styles.text}>Enter the youtube url</Text>
          <TextInput style={[Styles.inputContainer]} onChangeText={(text) => this.setState({ text: text })}
            value={this.state.text}
          />
        </View>
        <View style={Styles.flexQR}>
          <Text style={Styles.titleText}>Quick QR</Text>
          <Switch
            onValueChange={value => this.setState({ isHidden: value })}
            value={this.state.isHidden}
            disabled={false}
            activeText={'on'}
            changeValueImmediately={true}
            inActiveText={'off'}
            backgroundActive={Colors.green}
            backgroundInactive={Colors.green}
            circleActiveColor={Colors.white}
            circleInActiveColor={Colors.white}
            style={{ width: 20, height: 10 }}
          />
          <Text style={Styles.titleText}>Custom QR</Text>
        </View>
        <View  >
          {
            list.map((l, i) => (
              <ListItem
                style={
                  { opacity: this.state.isHidden ? 100 : 0, flex: this.state.isHidden ? 0 : 1 }}
                containerStyle={{
                  borderTopWidth: 2,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.lightgrey

                }}
                key={i}

                title={l.name}
                onPress={() => this.onListItem(l.id)}
                rightIcon={{ name: l.icon }}
              />
            ))
          }

        </View>

        <TouchableOpacity style={Styles.section} onPress={() => this.generateQR()}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={Styles.generateQR}>Generate QR Code</Text>
          </View>
        </TouchableOpacity>

        {this.displayQRCode()}
        <ActionButton buttonColor={Colors.pink} position="center" renderIcon={active => active ? (<FontAwesome name="close" style={Styles.actionButtonIcon} />) : (<FontAwesome name="qrcode" style={Styles.actionButtonIcon} />)} >
          <ActionButton.Item buttonColor={Colors.pink} title="Youtube" onPress={() => this.props.navigation.navigate('https://www.facebook.com/')}  >
            <FontAwesome name="youtube" style={Styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={Colors.pink} title="Facebook" onPress={() => this.setState({ text: "https://www.facebook.com/" })}>
            <FontAwesome name="facebook" style={Styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={Colors.pink} title="Instagram" onPress={() => this.setState({ text: "https://www.instagram.com/" })}>
            <FontAwesome name="instagram" style={Styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={Colors.pink} title="Linkedin" onPress={() => this.setState({ text: "https://www.linkedin.com/" })}>
            <FontAwesome name="linkedin-square" style={Styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={Colors.pink} title="Contact VCF" onPress={() => this.setState({ text: "https://contacts.google.com/" })}>
            <Icon name="md-contact" style={Styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={Colors.pink} title="URL/Website" onPress={() => this.setState({ text: "https://google.com/" })}>
            <Icon name="md-link" style={Styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={Colors.pink} title="PDF" onPress={() => this.setState({ text: "https://pdf-download-firefox.en.softonic.com/" })}>
            <FontAwesome name='file-pdf-o' style={Styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}




export default CodeScreen;
