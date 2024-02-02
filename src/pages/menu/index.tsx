import React, {useState} from 'react'
import {FlatList, View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native'

export function Menu({ }){
    const data = [
        {id: 1, name: 'Prato Principal', email: 'Bife acebolado'},
        {id: 2, name: 'Opção Vegetariana', email: 'Strogonoff de Grão de Bico'},
        {id: 3, name: 'Acompanhamento', email: 'Feijão com Batata Doce'},
        {id: 4, name: 'Salada', email: 'Repolho verde, Cenoura, Alface'},
        {id: 5, name: 'Guarnição', email: 'Farofa, Arroz'},
        {id: 6, name: 'Sobremesa', email: 'Melancia'},
        {id: 7, name: 'Suco', email: 'Suco de Caju'},
    ]
        const item = ({ item }:{ item:any }) => (
            <View style={{ flexDirection: 'row'}}>
                <View style={{ width: '40%', height: 40, marginLeft: 20}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'left'}}>{item.name}</Text>
                </View>
                <View style={{ width: '50%'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.email}</Text>
                </View>
            </View>
        )
        return (
            <View style={[styles.content, {backgroundColor: '#347af0'}]}>
                <Text style = {[styles.title, {marginTop: '10%', color: 'white'}]}>Ficha Fácil</Text>
                <Text style = {[styles.title, {marginTop: '10%', color: 'white'}]}>Você possui 4 fichas</Text>
                <View style={[styles.content, {marginTop: '10%', borderRadius:30, backgroundColor: 'white'}]}>
                    <Text style = {styles.title}>Cardápio</Text>
                    <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} />
                </View>
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
        marginTop: 20,
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
        fontWeight: 'bold'
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