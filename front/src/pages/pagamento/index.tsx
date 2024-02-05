import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';
import axios from 'axios';

export function Pagamento({ navigation }) {
  const [pixPayload, setPixPayload] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Adjust the URL to match your backend configuration
  const fetchPixPayload = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/generate-pix/', {
        // Example data, adjust according to what your backend expects
        amount: "4.00", // The transaction amount in Brazilian Reais
        recipient_key: "06.517.387/0001-34", // Example recipient's PIX key
        transaction_id: "unique_id",
        merchant_name: "Universidade Federal do Piaui",
        city: "Teresina",
      });
      console.log(response.data);
      setPixPayload(response.data.pix_payload);
    } catch (error) {
      console.error('Erro ao obter o link do pagamento:', error);
      // Handle error here, possibly showing an error message to the user
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPixPayload(); // Fetch PIX payload when component mounts
  }, []);

  const handleCopyPayload = () => {
    Clipboard.setString(pixPayload);
    // Indicate to the user that the payload has been copied, e.g., through a toast message
    alert('Copiado para a área de transferência.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <>
          <Text style={styles.text}>PIX Copia e Cola:</Text>
          <Text selectable={true} onPress={handleCopyPayload}>{pixPayload}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
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