import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TransactionItemProps {
  date: string;
  amount: number;
  description?: string;
  user?: string;
  type?: number;
}

export default function TransactionItem({...props}:TransactionItemProps) {
  return (
    <View style={styles.container}>
      <Text style= {styles.flatlistText}>{props.date}</Text>
      <Text style= {styles.flatlistText}>{props.description}</Text>
      <Text style= {styles.flatlistText}>{props.user}</Text>
      <Text style= {styles.flatlistText}>{props.amount}</Text>
      <Text style= {styles.flatlistText}>{props.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 320
  },
  flatlistText: {
    fontSize: 15
  }
});