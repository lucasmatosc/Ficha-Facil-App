import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native'

export function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleInputChange = (text:string) => {
        setPassword(text);
    };

    const handleMostrarOcultarSenha = () => {
        setMostrarSenha((prevState) => !prevState);
    };
    return(
        <View style = {styles.content}>
            <Text style = {styles.title}>Bem Vindo!</Text>
            <Image style = {styles.logo}
                source={require("../../assets/login.png")}
            />
            <TextInput
                style={styles.input}
                placeholder="Usuário"
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
            <TouchableOpacity style = {[styles.link, {marginTop:30}]} onPress={() => navigation.navigate('Cadastro')}>
                <Text>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.link} onPress={() => navigation.navigate('Cadastro')}>
                <Text>Esqueceu o login?</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.link} onPress={() => navigation.navigate('Cadastro')}>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Principal')}>
                <Text style = {styles.buttonText}>Entrar</Text>
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