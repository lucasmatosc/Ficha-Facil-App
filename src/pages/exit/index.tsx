import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function Exit({ navigation }){
  return(
    <View style = {styles.container}>

      <Text style = {styles.title}>Deseja Sair?</Text>
      <View style={{ flexDirection: 'row'}}>
        <View style={{ width: '50%', height: 40, marginLeft: '28%'}}>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Menu')}>
                <Text style = {styles.buttonText}>Não</Text>
            </TouchableOpacity>
        </View>
        <View style={{ width: '50%'}}>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style = {styles.buttonText}>Sim</Text>
            </TouchableOpacity>
        </View>
    </View>
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