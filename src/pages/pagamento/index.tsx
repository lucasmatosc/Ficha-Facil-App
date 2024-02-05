import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function Pagamento({ navigation }){
  return(
    <View style = {styles.container}>
      <Text style = {styles.title}>Pagamento</Text>
      <Text style = {styles.text}>10 fichas = R$ 8,00</Text>
      <Text style = {styles.title}>QR Code</Text>
      <Image style = {styles.logo}
        source={require("../../assets/qrcode.png")}
      />
      <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style = {styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 320, 
    height: 320, 
    marginLeft: 20,
    marginBottom: 30,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text:{
    fontSize: 20,
    marginBottom: 50,
  },
  button:{
    backgroundColor: '#347af0',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    },
buttonText:{
    color: '#FFF',
    fontSize: 20,
},
})