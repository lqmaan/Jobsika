import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component {
    constructor(props) {
 
        super(props)
     
        this.state = {
     
          UserName: '',    
          UserPassword: '',
     
        }
     
      }

      UserLoginFunction = () =>{
 
        var UserName  = this.state.UserName ;
        var UserPassword  = this.state.UserPassword ;
        if(UserName.length == 0 ||  UserPassword.length == 0 )
        {
            alert("Required Field is Missing");
        }
        else
        {
        var url = 'https://lh007lucky.000webhostapp.com/login.php';
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
    .then((responseJson) => {
     if(responseJson == 'Data Matched')
      {
          this.props.navigation.navigate('Menu');
      }
      else{
        alert(responseJson);
      }
    }).catch((error) => {
      console.error(error);
    });

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
                >Login</Text>               

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
                        placeholder="Username"
                        placeholderTextColor="#00716F"
                        onChangeText={UserName => this.setState({UserName})}
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
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        onChangeText={UserPassword => this.setState({UserPassword})}
                        style={{ paddingHorizontal: 10 }}
                    />

                </View>
                <View>
                <TouchableOpacity
                        onPress={this.UserLoginFunction}
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

                        }}>Sign In</Text>
                        
                    </View>
                   </TouchableOpacity>         
                </View>
                <Text

                    onPress={() => navigate('Register')}

                    style={{
                        alignSelf: "center",
                        color: "#00716F",
                        // fontFamily: "SemiBold",
                        paddingVertical: 30
                    }}>Register</Text>
            </View>

        )
        const styles = StyleSheet.create({})
    }
}