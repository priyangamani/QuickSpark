
import PhotoGrid from 'react-native-photo-grid';
import React, { Component } from "react";
import { QRCode } from 'react-native-custom-qr-codes';
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
import { getNavigationOptions } from '../../utils/navigation';
import * as Colors from '../../themes/colors';
import { Icon } from 'react-native-elements';


class BestGrid extends Component {

  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    // Build an array of 60 photos
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text='+(i+1) }
    });
    this.setState({ items });
  }

  render() {
    return(
      <PhotoGrid
    
        data = { this.state.items }
        itemsPerRow = { 1 }
        itemMargin = { 1 }
        renderHeader = { this.renderHeader }
        renderItem = { this.renderItem }
      />
    );
  }

  renderHeader() {
    return(
        <View>
        <TouchableOpacity
        style={{ alignItems: 'flex-end' }}>
        <View >
            <Icon
                raised
                name='times'
                type='font-awesome'
                color={Colors.black} />
        </View>
    </TouchableOpacity>
    </View>
    );
  }

  renderItem(item, itemSize) {
    return(
      <TouchableOpacity
        key = { item.id }
        style = {{ marginTop:20,width:500 }}
        onPress = { () => {
          // Do Something
        }}>
       
         <QRCode style = {{ flex: 1 }} content="http://facebook.github.io/react-native/" codeStyle='dot' color="blue" outerEyeStyle='circle' innerEyeStyle='diamond'
     linearGradient={['rgb(255,0,0)','rgb(0,255,255)']} backgroundColor="pink" logo={{uri: "https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg"}}
      /> 
      </TouchableOpacity>
    )
  }

}

export default BestGrid;

BestGrid.navigationOptions = ({ navigation }) => getNavigationOptions("", Colors.pink, 'white');