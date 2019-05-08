import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import icon from '../../assets/drawable/icon.png';
import api from "../../services/api";

export default class Main extends Component {
  state = {
     newBox : ""
  };

  navegarTela = async () => {
   this.props.navigation.navigate("Box");
  };

  async componentDidMount () {
     const box = await AsyncStorage.getItem("@TcheloBoxFile:box");

     if (box) {
      this.navegarTela();
     }
  }
  
  handleSignIn = async () => {
   const response = await api.post("Boxes", {
      title: this.state.newBox
   });

   await AsyncStorage.setItem("@TcheloBoxFile:box", response.data._id);

   this.navegarTela();
  };

  render() {
    return (
    <View style={styles.container}>

       <Image style={styles.logo} source={icon} />  

       <Text style={styles.text}>Tchelo Box Files Mobile</Text>

       <TextInput style={styles.input}
          placeholder="Crie um box"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value = {this.state.newBox}
          onChangeText = {text => this.setState({newBox : text})} />

       <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
       </TouchableOpacity>            
    </View>
    );
  }
}
