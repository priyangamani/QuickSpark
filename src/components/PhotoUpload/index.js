
import React, { Component } from "react";
import PhotoUpload from 'react-native-photo-upload';
import { getNavigationOptions } from '../../utils/navigation';
import * as Colors from '../../themes/colors';
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

import { Icon } from 'react-native-elements'
class Photo extends Component {

    constructor() {
        super();
        this.state = { logo: "" };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity

                    onPress={() => this.props.navigation.navigate("CodeScreen",

                        {
                            logo: this.state.logo
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
                <PhotoUpload
                    onPhotoSelect={avatar => {
                        if (avatar) {
                            console.log('Image base64 string: ', avatar)
                            let base64Logo = 'data:image/png;base64,'+avatar;
                              this.setState({logo: base64Logo});
                            
                        }
                    }}>
                    <Image
                        style={{
                            paddingVertical: 30,
                            width: 150,
                            height: 150,
                            borderRadius: 75,

                        }}
                        resizeMode='cover'
                        source={{
                            uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                        }}
                    />


                </PhotoUpload>
            </View>
        );
    }


}


export default Photo;

Photo.navigationOptions = ({ navigation }) => getNavigationOptions("", Colors.pink, 'white');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d2d9db',
    },
});