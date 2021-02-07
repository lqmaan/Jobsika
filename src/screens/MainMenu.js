import React from 'react';
import { Text, View, Image, TextInput, BottomNavigation, Touchable, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


import { SearchBar, withTheme } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


export default class MainInterface extends React.Component {
    state = {
        search: ''
    };
    
    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        const { navigate } = this.props.navigation
        return (
            
            <View style={{ backgroundColor: "#FFF", height: "100%" }}> 
                <ScrollView
                    style={{ marginHorizontal:10
                    }}> 
                    <Image source={require('../images/logo.png')}
                    style={{ 
                        marginTop: 50,
                        width: 300, 
                        height: 100,
                        alignSelf: 'center'
                    }}
                />

                <Text
                style={{
                    marginTop: 20,
                    fontWeight: 'bold',
                    fontSize: 20
                }}>   Find The Best Jobs  
                    <View
                        style={{
                            paddingLeft: 100
                        }}
                    >
                        <TouchableOpacity onPress={() => navigate('Login')}>
                            <Image
                            source={require("../images/logout.jpg")}
                            style={{
                            alignItems: 'flex-start',
                            width: 30, height: 30, marginHorizontal:10}} 
                    
                            />
                        </TouchableOpacity>
                    </View>
                </Text>
                <View style={{
                    marginTop: 20
                }}>
                    <SearchBar
                        round
                        lightTheme
                        withTheme='white'
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}

                        inputStyle={{ height: -200 }}
                    />

                </View>
                <View>
                    <Text style={{
                        marginTop: 30,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>   Suggested Job  </Text>
                </View>

                <View style={{
                    marginTop: 20
                }
                }>
                    <ScrollView horizontal
                    style={{ marginHorizontal:10
                       
                    }}
                    >
                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/Acc.png")}
                             style={{ width: 150, height: 150, marginHorizontal:10}} 
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/Content.png")}
                             style={{ width: 150, height: 150, marginHorizontal:10}} 
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/Design.png")}
                             style={{ width: 150, height: 150, marginHorizontal:10}} 
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/web.png")}
                             style={{ width: 150, height: 150, marginHorizontal:10}} 
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/Writer.png")}
                             style={{ width: 150, height: 150, marginHorizontal:10}} 
                        />
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View>
                    <Text style={{
                        marginTop: 10,
                        marginBottom: 20,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>   Job List  </Text>
                </View> 
                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/List/Accountant.png")}
                             style={{ width: 325, height: 75, marginVertical:10, marginLeft:10 }} 
                            /> 
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate('Form')}>            
                        <Image
                             source={require("../images/List/Content.png")}
                             style={{ width: 325, height: 75, marginVertical:10, marginLeft:10}} 
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/List/designer.png")}
                             style={{ width: 325, height: 75, marginVertical:10, marginLeft:10}} 
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/List/web_dev.png")}
                             style={{ width: 325, height: 75, marginVertical:10, marginLeft:10}} 
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate('Form')}>
                        <Image
                             source={require("../images/List/Writer.png")}
                             style={{ width: 325, height: 75, marginVertical:10, marginLeft:10}} 
                        />
                        </TouchableOpacity>
                </ScrollView>
                <View 
                    style={{
                    height: 50,
                    position: 'absolute', 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    flexDirection: 'row'
                    }}>
                        <View style={{
                            backgroundColor: 'powderblue',
                            flex:1
                        }}>
                            <TouchableOpacity onPress={() => navigate('Menu')}>
                            <Image
                            source={require("../images/Footer/profile.png")}
                            style={{
                            alignSelf: 'center',
                            justifyContent: 'center',
                            width: 30, height: 30, marginHorizontal:10}} 
                            />
                            <Text
                            style={{
                                alignSelf: 'center'
                            }}>Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: 'skyblue',
                            flex:1
                        }}>
                            <TouchableOpacity onPress={() => navigate('Menu')}>
                            <Image
                            source={require("../images/Footer/home1.png")}
                            style={{
                            alignSelf: 'center',
                            justifyContent: 'center',
                            width: 30, height: 30, marginHorizontal:10}} 
                            />
                            <Text
                            style={{
                                alignSelf: 'center'
                            }}>Home</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: 'powderblue',
                            flex:1
                        }}>
                            <TouchableOpacity onPress={() => navigate('Notif')}>
                            <Image
                            source={require("../images/Footer/notif.png")}
                            style={{
                            alignSelf: 'center',
                            width: 30, height: 30, marginHorizontal:10}} 
                            />
                            <Text
                            style={{
                                alignSelf: 'center'
                            }}>Notification</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        )
    }
}