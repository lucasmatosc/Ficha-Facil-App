import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

export function Cadastro({ navigation }){
    const [name, setName] = useState('');
    const [registration, setRegistration] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleInputChange = (text) => {
        setPassword(text);
    };

    const handleMostrarOcultarSenha = () => {
        setMostrarSenha((prevState) => !prevState);
    };
    return(
        <View style = {styles.content}>
            <Text style = {styles.title}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={newUser => setName(newUser)}
                defaultValue={name}
            />
            <TextInput
                style={styles.input}
                placeholder="Matrícula"
                onChangeText={newUser => setRegistration(newUser)}
                defaultValue={registration}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={newUser => setEmail(newUser)}
                defaultValue={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={!mostrarSenha}
                value={password}
                onChangeText={handleInputChange}
            />
            <TouchableOpacity style={styles.mostrarOcultarButton} onPress={handleMostrarOcultarSenha}>
                <Text>{mostrarSenha ? 'Ocultar' : 'Mostrar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.link} onPress={() => navigation.navigate('Login')}>
                <Text>Voltar Para Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Principal')}>
                <Text style = {styles.buttonText}>Cadastrar</Text>
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
        width: '80%',
        height: 40,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        padding: 10,
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
        marginTop: 30
    },
    button:{
        backgroundColor: '#347af0',
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 30,
    },
    buttonText:{
        color: '#FFF',
        fontSize: 20,
    },
})