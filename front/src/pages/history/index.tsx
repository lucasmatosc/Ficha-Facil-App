import React from "react";
import TransactionItem from "../../components/Transaction";
import {
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet
  } from "react-native";

  interface Transaction {
    id: number;
    date: string;
    amount: number;
    description: string;
  }
  
  const transactions: Transaction[] = [
    { id: 1, date: '2024-02-16', amount: 1, description: 'Consumo' },
    { id: 2, date: '2024-02-15', amount: 6, description: 'Compra' },
  ];
export function History({ navigation }){
    return(
        <View style={styles.content}>
            <Text style={styles.title}>
                Histórico
            </Text>
            <FlatList
                data={transactions}
                renderItem={({ item }) => (
                <TransactionItem
                    date={item.date}
                    amount={item.amount}
                    description={item.description}
                />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 40
    }
})