import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Alert } from 'react-native';

export default class Register extends React.Component {
    constructor(props) {
 
        super(props)
     
        this.state = {
     
          UserName: '',    
          UserPassword: '',
          CPassword: ''
     
        }
     
      }

      UserRegistrationFunction = () =>{
 
        var UserName  = this.state.UserName ;
        var UserPassword  = this.state.UserPassword ;
        var CPassword = this.state.CPassword;
        if(UserName.length == 0 ||  UserPassword.length == 0 || CPassword.length == 0 )
        {
            alert("Required Field is Missing");
        }
        else if(CPassword != UserPassword)
        {
            alert("Wrong input");
        }
        else
        {
            
        var url = 'https://lh007lucky.000webhostapp.com/register.php';
        var header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
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
        const { navigate } = this.props.navigation
        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>
                <Image source={require('../images/job.jpg')}
                    style={{ width: "100%", height: "40%" }}
                />
                <Text
                    style={{
                        fontSize: 40,
                        // fontFamily: "SemiBold",
                        alignSelf: "center",
                        marginTop: -40
                    }}
                >Register</Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 50,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="user" color="#00716F" size={24} />
                    <TextInput
                        onChangeText={Username => this.setState({Username})}
                        placeholder="Username"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="lock" color="#00716F" size={24} />
                    <TextInput
                        secureTextEntry
                        onChangeText={UserPassword => this.setState({UserPassword})}
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}

                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="lock" color="#00716F" size={24} />
                    <TextInput
                        secureTextEntry
                        onChangeText={CPassword => this.setState({CPassword})}
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>

                <View>
                    <TouchableOpacity
                    onPress={this.UserRegistrationFunction}
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
                        <Text style={{
                            color: "white",
                            // fontFamily: "SemiBold",
                        }}>Sign Up</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                
            </View>

        )
    }
}