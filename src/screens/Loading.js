import React, { Component } from 'react';
import { StyleSheet, Dimensions, AppRegistry, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 3,
        }
    }

    componentWillMount() {
        //Start the method containing the timer
        this.startTimer()
    }

    startTimer() {
        let timeChange;
        //The key is to replace time in state with time for calculation and judgment, because time in state is constantly refreshed in render, but it will not be refreshed in the method
        let time = this.state.time;
        const clock = () => {
            if (time > 0) {
                //The update method is executed when time>0
                time = time - 1;
                this.setState({
                    time: time,
                });
                console.log(time);
            } else {
                //When time=0, execute the end loop method
                clearInterval(timeChange);
                //When the countdown time = 0, enter the project, routing jump is used here
                this.props.navigation.navigate({ routeName: 'Login' });
            }
        };
        //The clock method is executed every second
        timeChange = setInterval(clock, 1000);
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={{
                    backgroundColor: "white",
                    height: "100%",
                    alignContent: 'center'
                }}>
                    <Image source={require('../images/My_Video.gif')}
                        style={{
                            width: "100%", height: "50%",
                            marginVertical: 200,
                        }}
                    /></View>
                <TouchableOpacity
                    style={{
                        borderRadius: 10,
                        position: 'relative',
                        right: -150,
                        top: 300,
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        width: 60,
                        height: 25,
                        alignItems: 'center'

                    }}
                    onPress={() => {
                        //Click the ‘skip’ button, you can also enter the project                       
                        this.props.navigation.navigate('Login')
                    }}>


                    <View style={{
                        backgroundColor: "#FFF",
                        height: "100%",
                        marginTop: 300
                    }}>

                        <Text style={{ fontSize: 25, color: 'blue' }}>

                            Skip
                            {this.state.time}s</Text>

                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#9FA8DA' // Set your own custom Color
        }
    });
