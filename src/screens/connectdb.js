import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
 
class connectdb extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',    
      UserPassword: ''
 
    }
 
  }
 
  UserRegistrationFunction = () =>{
 
 
    var UserName  = this.state.UserName ;
    var UserPassword  = this.state.UserPassword ;
    var url = 'https://lh007lucky.000webhostapp.com/register.php';
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
 
// Showing response message coming from server after inserting records.
        alert("Inserted");
 
      }).catch((error) => {
        console.error(error);
      });

  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Name"
 
          onChangeText={(text) => this.setState({UserName: text})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
 
          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
 
        <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
      
  
 
</View>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
},
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',
 
 // Set border Radius.
 borderRadius: 5 ,
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
 
//AppRegistry.registerComponent('connectdb', () => Tes);