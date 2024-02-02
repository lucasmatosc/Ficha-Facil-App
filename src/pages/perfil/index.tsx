import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

export function Perfil({ navigation }){
    const [name, setName] = useState('João');
    const [registration, setRegistration] = useState('293829382');
    const [email, setEmail] = useState('joao@gmail.com');
    const [password, setPassword] = useState('joao123');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleInputChange = (text) => {
        setPassword(text);
    };

    const handleMostrarOcultarSenha = () => {
        setMostrarSenha((prevState) => !prevState);
    };
    return(
        <View style = {styles.content}>
            <Text style = {styles.title}>Informações Pessoais</Text>
            <Text style = {styles.text}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={newUser => setName(newUser)}
                defaultValue={name}
            />
            <Text style = {styles.text}>Matrícula</Text>
            <TextInput
                style={styles.input}
                placeholder="Matrícula"
                onChangeText={newUser => setRegistration(newUser)}
                defaultValue={registration}
            />
            <Text style = {styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={newUser => setEmail(newUser)}
                defaultValue={email}
            />
            
            <Text style = {styles.text}>Senha</Text>
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
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>Alterar</Text>
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
        marginLeft: 30,
        marginTop: 30,
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