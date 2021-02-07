import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component {

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>
                <Text>
                    Notif
                </Text>
            </View>

        )
    }
}