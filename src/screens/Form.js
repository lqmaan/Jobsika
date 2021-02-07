import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
//import { RadioButton } from 'react-native-paper';

import { ScrollView } from 'react-native-gesture-handler';

export default class MainInterface extends React.Component {
    state = {
        search: ''
    };
    
    updateSearch = (search) => {
        this.setState({ search });
    };

    constructor(props) {
 
        super(props)
     
        this.state = {
     
          FullName: '',    
          Email: '',
          Address: '',
          Phone: ''
     
        }
     
      }


    SubmitFormFunction = () =>{
 
        var UserName  = this.state.UserName ;
        var UserPassword  = this.state.UserPassword ;
        var CPassword = this.state.CPassword;
        if(FullName.length == 0 ||  Email.length == 0 || Address.length == 0 || Phone.length == 0)
        {
            alert("Required Field is Missing");
        }
        else
        {
        var url = 'https://lh007lucky.000webhostapp.com/submitform.php';
        var header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        var Data = {
            username: UserName,
            password: UserPassword
        }
        
       fetch(url, 
        {
      method: 'POST',
      headers: header,
      body: JSON.stringify(Data)
    }
    ).then((response) => response.json())
          .then((response) => {
              if(response === 'User Registered Successfully')
              {
                this.props.navigation.navigate('Login');

              }
              else
              {
                alert("Inserted");
              }
     
          }).catch((error) => {
            console.error(error);
          }).done();
      }
    }

    render() {
        const { search } = this.state;
        const { navigate } = this.props.navigation
        return (
            
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>
                <ScrollView
                    style={{ marginHorizontal:10
                    }}>
                <Text
                style={{
                    marginTop: 100,
                    fontWeight: 'bold',
                    fontSize: 30,
                    alignSelf: 'center',
                    paddingVertical: 30
                }}>   Application Form 
                </Text>
                
                <View>
                    <Text
                    //Full Name
                    style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10
                    }}> Full Name </Text>
                    
                    <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 2,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2
                        }}>
                    
                    <TextInput
                        secureTextEntry
                        placeholder="Your Full Name....."
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                    </View>

                        
                <Text
                    // Email
                    style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10
                        
                    }}> Email </Text>
                    <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 2,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2
                        }}>
                    
                    <TextInput
                        secureTextEntry
                        placeholder="Your Email....."
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>

                <Text
                    //Address
                    style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10
                        
                    }}> Address </Text>

                    <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 2,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2
                        }}>
                    
                    <TextInput
                        secureTextEntry
                        placeholder="Your Address....."
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>

                <Text
                    //Phone
                    style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10
                        
                    }}> Phone </Text>
                    <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 2,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2
                        }}>
                    <TextInput
                        secureTextEntry
                        placeholder="Your Phone Number....."
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>

                
                </View>


                <TouchableOpacity
                        onPress={this.SubmitFormFunction}
                        >
                    <View style={{
                        marginHorizontal: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 30,
                        backgroundColor: "#00716F",
                        paddingVertical: 10,
                        borderRadius: 23
                    }}>
                        
                        <Text
                        style={{
                            color: "white",
                            // fontFamily: "SemiBold",

                        }}>Submit</Text>
                        
                    </View>
                   </TouchableOpacity>
                    {/*
                    <RadioButton
                        value="Male"
                        status={ checked === 'Male' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Male')}
                    />
                    <RadioButton
                        value="Female"
                        status={ checked === 'Female' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('Female')}
                    />
                    */}
                
                </ScrollView>
                <View 
                    style={{
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