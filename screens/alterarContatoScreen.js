import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import axios from 'axios';
// import { atualizarContato, removerContato } from '../backend/dados.js';

function AlterarContatoScreen({ route, navigation }) {
  const [getNome, setNome] = useState('');
  const [getCpf, setCpf] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getTelefone, setTelefone] = useState('');
  const [getId, setId] = useState('');

  // const [novoNome, setNovoNome] = useState(getNome);
  // const [novoEmail, setNovoEmail] = useState(getEmail);
  // const [novoTelefone, setNovoTelefone] = useState(getTelefone);

  useEffect(() => {
    if (route.params) {
      // const { nome } = route.params;
      // const { cpf } = route.params;
      // const { email } = route.params;
      // const { telefone } = route.params;
      // const { id } = route.params;
      const { nome = '', cpf = '', email = '', telefone = '', id = '' } = route.params;
      
      setNome(nome);
      setCpf(cpf);
      setEmail(email);
      setTelefone(telefone);
      setId(id);
    }
  }, []);


  function excluir() {
    removerContato(getId);
    limparCampos();
    alert("Contato Removido com sucesso!")
    navigation.navigate('Lista');
  }

  function excluirDados() {
    axios.delete('https://644c548917e2663b9d049ecb.mockapi.io/cliente/' + getId
    )
      .then(function (response) {
        limparCampos();
        // showMessage({
        //   message: "Registro excluído com sucesso!",
        //   type: "success",
        // });
        alert("Contato Removido com sucesso!");
        navigation.navigate('Lista');
        console.log(response);
      })
      .catch(function (error) {
        // showMessage({
        //   message: "Algum erro aconteceu!",
        //   type: "info",
        // });
        alert("Algum erro aconteceu!")
        console.log(error);
      });
  }

  function alterar() {
    const propriedadesAtualizadas = { nome: getNome, email: getEmail, telefone: getTelefone };
    atualizarContato(getId, propriedadesAtualizadas);
    alert("Contato Alterado com sucesso!")
    navigation.navigate('Lista');
  }

  async function alterarDados() {
    await axios.put('https://644c548917e2663b9d049ecb.mockapi.io/cliente/' + getId, {
      nome: getNome,
      cpf: getCpf,
      email: getEmail,
      telefone: getTelefone,
    }
    )
      .then(function (response) {
        // showMessage({
        //   message: "Registro alterado com sucesso!",
        //   type: "success",
        // });
        alert("Contato Alterado com sucesso!")
        navigation.navigate('Lista');
        console.log(response);
      })
      .catch(function (error) {
        // showMessage({
        //   message: "Algum erro aconteceu!",
        //   type: "info",
        // });
        alert("Algum erro aconteceu!")
        console.log(error);
      });
  }

  function limparCampos() {
    setNome('');
    setCpf('');
    setTelefone('');
    setEmail('');
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
        <TouchableOpacity style={styles2.button} onPress={alterarDados}>
          <Text style={styles2.buttonText}>Alterar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.button} onPress={excluirDados}>
          <Text style={styles2.buttonText}>Excluir</Text>
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

export default AlterarContatoScreen;