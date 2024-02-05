import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native'

export function Fichas({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style = {styles.content}>
            <Text style = {styles.title}>Comprar Fichas</Text>
            <TextInput
                style={styles.input}
                onChangeText={newPassword => setPassword(newPassword)}
                defaultValue={password}
                textAlign="center"
                placeholder='Nº de fichas'
                textAlignVertical="center"
                keyboardType='numeric'
            />
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Pagamento')}>
                <Text style = {styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo:{
        width: '100%', 
        height: 200, 
        marginLeft: 20,
        marginBottom: 50,
    },
    input:{
        width: '40%',
        height: 40,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        padding: 10,
        justifyContent: 'center',
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    link:{
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    button:{
        backgroundColor: '#347af0',
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 50,
    },
    buttonText:{
        color: '#FFF',
        fontSize: 20,
    },
})