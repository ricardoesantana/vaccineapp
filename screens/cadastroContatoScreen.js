import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
// import { adicionarContato } from '../backend/dados.js';
import axios from 'axios';

function CadastroContatoScreen({ navigation }) {
  const [getNome, setNome] = useState('');
  const [getCpf, setCpf] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getTelefone, setTelefone] = useState('');

  function cadastrar() {
    if ((nome, email, telefone) !== '') {
      const contato = {
        nome: nome,
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HdzG1pEhoNcrazR62fZv_2gNXtiqlAq42A&usqp=CAU',
        telefone: telefone, email: email
      };
      adicionarContato(contato);
      limparCampos();
      alert("Contato Cadastro com sucesso!")
      navigation.navigate('Lista');
    } else {
      alert("Favor inserir todos os campos!")
    }
  }

  async function inserirDados() {
    if ((getNome, getEmail, getTelefone, getCpf) !== '') {

      await axios.post('http://professornilson.com/testeservico/clientes', {
        nome: getNome,
        cpf: getCpf,
        telefone: getTelefone,
        email: getEmail,
      }
      )
        .then(function (response) {
          alert("Contato Cadastro com sucesso!")
          navigation.navigate('Lista');
          console.log(response);
        })
        .catch(function (error) {
          showMessage({
            message: "Algum erro aconteceu!",
            type: "info",
          });
          console.log(error);
        });
    } else {
      alert("Favor inserir todos os campos!")
    }
  }

  function limparCampos() {
    setNome('');
    setTelefone('');
    setEmail('');
    setCpf('');
  }

  return (
    <View style={[styles2.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1 }} >
        <Header
          leftComponent={<Button
            icon={
              <Icon
                name="arrow-left"
                size={25}
                color="white"
              />
            }
            title=""
            onPress={() => navigation.navigate('Lista')}
          />}
          centerComponent={{
            text: 'Contato',
            style: { color: '#fff', fontSize: 25, width: 300, textAlign: 'auto', flex: 1, alignItems: 'center', justifyContent: 'center' }
          }}
          centerContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
      </View>
      {/* <View style={styles2.container}> */}
      <View style={{ flex: 4 }} >
        <TextInput
          style={styles2.input}
          placeholder="Nome"
          value={getNome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles2.input}
          placeholder="CPF"
          value={getCpf}
          onChangeText={setCpf}
        />
        <TextInput
          style={styles2.input}
          placeholder="Email"
          keyboardType="email-address"
          value={getEmail}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles2.input}
          placeholder="Telefone"
          value={getTelefone}
          onChangeText={setTelefone}
        />
        <TouchableOpacity style={styles2.button} onPress={inserirDados}>
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
    paddingTop: 0
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingTop: 40
  },
  input: {
    width: 300,
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
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroContatoScreen;