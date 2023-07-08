import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Avatar, Input, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function HistVacScreen({ route, navigation }) {

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (route.params) {
      
      const { name = '', avatar = '', id = '' } = route.params;
      
      setNome(name);
      setAvatar(avatar);
      setId(id);
    }
  }, []);

  return (

    <View style={styles.container}>
        
        <Text style={styles.title}> Histórico de Vacinação ! </Text>

        <Avatar size="xlarge" rounded
          source={{
            uri: "https://hemos.com.br/wp-content/uploads/2020/06/2186.349-Vacina-hist%C3%B3ria-e-import%C3%A2ncia-Blog_v2APROVADO.png"
          }} style={styles.avatar}
          onPress={()=>navigation.navigate('Home')} />
        {/* <Text style={styles.title2}> Histórico de Vacinação </Text> */}

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Inicial')}>
          <Text style={styles.buttonText} > VOLTAR </Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#497e99',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    // marginBottom: 24,
    // marginLeft: 24,
    padding: (5,5,0,20),
    color: 'white',
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: (5,5,0,20),
    color: 'white',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 8,
    color: '#000000',
    borderRadius: 14,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#1c313a',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#1c313a',
    margin: (0,0,0,20),
  },
});

export default HistVacScreen;