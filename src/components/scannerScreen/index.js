import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Button,
  Alert,Image,
  Dimensions
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Colors from '../../themes/colors';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QRCodeScanner from "react-native-qrcode-scanner";

import * as Animatable from "react-native-animatable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;


console.disableYellowBox = true;

class ScannerScreen extends Component {
  onSuccess(e) {
    alert("Scanned Successfully");
  }

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: fromValue
      }
    };
  }

  constructor(props) {
    super(props);
  
   
  }

  componentDidMount(){
   
  }

 
  
  render() {

    return (
   
      <View style={styles.container}>
      <View >
      <QRCodeScanner
        showMarker
        onRead={this.onSuccess.bind(this)}
        cameraStyle={{ height: SCREEN_HEIGHT }}
        customMarker={
          <View style={styles.rectangleContainer}>
            <View style={styles.topOverlay}>
              <Text style={{ fontSize: 30, color: "white" }}>
                QR CODE SCANNER
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.leftAndRightOverlay} />

              <View>
                <Icon
                  name="ios-qr-scanner"
                  size={SCREEN_WIDTH * 0.73}
                  color={iconScanColor}
                />
                <Animatable.View
                  style={styles.scanBar}
                  direction="alternate-reverse"
                  iterationCount="infinite"
                  duration={1700}
                  easing="linear"
                  animation={this.makeSlideOutTranslation(
                    "translateY",
                    SCREEN_WIDTH * -0.54
                  )}
                />
              </View>

              <View style={styles.leftAndRightOverlay} />
            </View>

            <View style={styles.bottomOverlay} />
         
          </View>

            }
      />
      </View>
 

  <ActionButton buttonColor={Colors.pink} position="center" renderIcon={active => active ? (<FontAwesome name="close" style={styles.actionButtonIcon} /> ) : (<FontAwesome name="qrcode" style={styles.actionButtonIcon} />)} >
  <ActionButton.Item  buttonColor={Colors.pink} title="Youtube"  
  onPress={() => this.props.navigation.navigate("CodeScreen",{
  Qrcodelink: "https://www.youtube.com/"}
   )}>
    <FontAwesome name="youtube" style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item   buttonColor={Colors.pink} title="Facebook"
  onPress={() => this.props.navigation.navigate("CodeScreen",{
  Qrcodelink: "https://www.facebook.com/"}
   )}>
    <FontAwesome name="facebook" style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item  buttonColor={Colors.pink} title="Instagram" 
   onPress={() => this.props.navigation.navigate("CodeScreen",{
    Qrcodelink: "https://www.instagram.com/"}
     )}>
    <FontAwesome name="instagram" style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item  buttonColor={Colors.pink} title="Linkedin" 
   onPress={() => this.props.navigation.navigate("CodeScreen",{
    Qrcodelink: "https://www.linkedin.com/"}
     )}>
  <FontAwesome  name="linkedin-square" style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item  buttonColor={Colors.pink} title="Contact VCF" 
   onPress={() => this.props.navigation.navigate("CodeScreen",{
    Qrcodelink: "https://contacts.google.com/"}
     )}>
    <Icon name="md-contact" style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item  buttonColor={Colors.pink} title="URL/Website"
     onPress={() => this.props.navigation.navigate("CodeScreen",{
      Qrcodelink: "https://google.com/"}
       )}>
    <Icon name="md-link" style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item  buttonColor={Colors.pink} title="PDF"
    onPress={() => this.props.navigation.navigate("CodeScreen",{
      Qrcodelink: "https://pdf-download-firefox.en.softonic.com/"}
       )}>
  <FontAwesome name='file-pdf-o' style={styles.actionButtonIcon} />
  </ActionButton.Item>
  </ActionButton>
     </View>   
    );
  }

 
}
const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "red";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";

const iconScanColor = Colors.pink;


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor
  },
  actionButtonIcon: {
    fontSize: 25,
    height: 22,
    color: 'white',
    fontWeight: '500'
  },
  submitButton: {
    width: '100%', 
    height: 50,  
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom:50
}
});

export default ScannerScreen;
