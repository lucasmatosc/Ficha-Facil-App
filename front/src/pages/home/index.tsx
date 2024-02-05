import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function Home({ navigation }){
    function teste(){
        navigation.navigate('Login');
    }
  return(
    <View style = {styles.container}>
      <Image style = {styles.logo}
        source={require("../../assets/logo-ufpi.png")}
      />

      <Text style = {styles.title}>Ficha Fácil</Text>

      <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style = {styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#347af0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 320, 
    height: 320, 
    marginLeft: 20,
    marginBottom: 50,
  },
  title:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  button:{
    backgroundColor: '#FFF',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText:{
    color: '#347af0',
    fontSize: 20,
  }
})