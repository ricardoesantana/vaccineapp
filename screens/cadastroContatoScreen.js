import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { adicionarContato } from '../backend/dados.js';


function CadastroContatoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function cadastrar() {
    if((nome, email, telefone) !== ''){
      const contato = {
        nome: nome,
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HdzG1pEhoNcrazR62fZv_2gNXtiqlAq42A&usqp=CAU',
        telefone: telefone, email: email
      };
      adicionarContato(contato);
      limparCampos();
      alert("Contato Cadastro com sucesso!")
      navigation.navigate('Lista');
    }else{
      alert("Favor inserir todos os campos!")
    }
  }

  function limparCampos() {
    setNome('');
    setTelefone('');
    setEmail('');
  }

  return (
    <View >
      <Header
          leftComponent={ <Button
            icon={
              <Icon
                name="arrow-left"
                size={25}
                color="white"
              />
            }
            title=""
            onPress={()=>navigation.navigate('Lista')}            
          /> }
          centerComponent={{ text: 'Contato', style: { color: '#fff', fontSize: 25 } }}
      />
      <View style={styles2.container}>    
      
      <TextInput
        style={styles2.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles2.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles2.input}
        placeholder="Telefone"
        keyboardType="phone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TouchableOpacity style={styles2.button} onPress={cadastrar}>
        <Text style={styles2.buttonText}>Salvar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingTop: 40
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroContatoScreen;