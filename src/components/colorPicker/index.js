import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Slider, Text, Button, TouchableOpacity } from 'react-native';
import { ColorWheel } from 'react-native-color-wheel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon, colors } from 'react-native-elements';
import * as Colors from '../../themes/colors';
import { getNavigationOptions } from '../../utils/navigation';
export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saturation: 0,
      hue: 0,
      v: 0,
    }
  }

  render() {
    const setColors = (h, s, l) => {
      this.setState({ saturation: parseInt(s, 10) })
      this.setState({ hue: parseInt(h, 10) })
      this.setState({ light: l })
      console.log({ saturation: parseInt(s, 10) }, { hue: parseInt(h, 10) + 180 }, { light: l })
    }

    return (
      <View style={{ flex: 1, backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, 50%)` }} >

        <View style={{ flex: 1, width: "90%", marginLeft: Dimensions.get('window').width * 0.1 }}>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CodeScreen",

              {
                colorPicker: `hsl(${this.state.hue}, ${this.state.saturation}%, 50%)`
              }
            )}
            style={{ alignItems: 'flex-end' }}>
            <View >
              <Icon
                raised
                name='times'
                type='font-awesome'
                color={Colors.black} />
            </View>
          </TouchableOpacity>
          <ColorWheel
            initialColor={Colors.pink}
            onColorChange={color => setColors(color.h, color.s, color.v)
            }
            style={{ width: Dimensions.get('window').width * 0.8 }}
            thumbStyle={{ height: 30, width: 30, borderRadius: 30 }}
          />
          <View style={{ flexDirection: "row" }}>
            <Text>
              S:
            </Text>
            <View style={{ flex: 1 }}>
              <Slider
                value={this.state.saturation}
                minimumValue={0}
                maximumValue={100}
                step={1}
                onValueChange={(saturation) => this.setState({ saturation: saturation })} />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>
              H:
            </Text>
            <View style={{ flex: 1 }}>
              <Slider
                value={this.state.hue}
                minimumValue={0}
                maximumValue={360}
                step={1}
                onValueChange={(hue) => this.setState({ hue: hue })} />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>
              L:
            </Text>
            <View style={{ flex: 1 }}>
              <Slider
                value={this.state.light}
                minimumValue={0}
                maximumValue={100}
                step={1}
                onValueChange={(l) => this.setState({ light: l })} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
ColorPicker.navigationOptions = ({ navigation }) => getNavigationOptions("", Colors.pink, 'white');