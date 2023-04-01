import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import { consultarUsuario } from '../backend/dados.js';

function HomeScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function logar() {
    // Aqui você pode implementar a lógica para cadastrar o usuário
    // console.log(`Email: ${email}, Senha: ${password}`);
    if((email, password) !== ''){
      if(consultarUsuario(email, password)){
        return navigation.navigate('Lista');
      }else{
        alert("Login ou Senha inválidos!")
      }
      
    }else{
      alert('Favor inserir Login e Senha!')
    }
    
  }

  function cadastrar() {
    // Aqui você pode implementar a lógica para cadastrar o usuário
    console.log(`opa!!!`);
    ()=>navigation.navigate('Cadastro');
  }

  return (

    <View style={styles.container}>

      <Avatar size="xlarge" rounded
        source={{
          uri: "https://ifmr-sa.org/wp-content/uploads/2022/10/Ze-gotinha.png"
        }} style={styles.avatar} />
        
        <Text style={styles.title}>Vacinação Digital</Text>

      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaaaaa"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={logar}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText} >Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
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
    marginBottom: 20,
  },
});

export default HomeScreen;