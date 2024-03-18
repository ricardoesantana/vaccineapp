import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';
// import { usuarios, adicionarUsuario, removerUsuario } from '../backend/dados.js';
import { firebaseConfig } from '../backend/autentica.js';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function CadastroScreen({ navigation }) {

  // const [nome, setNome] = useState('');
  // const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [valideEmail, setValideEmail] = useState(true);


  function cadastrar() {
    // Aqui você pode implementar a lógica para cadastrar o usuário
    // if ((nome, cpf, email, senha) !== '') {
    //   const usuario = { id: null, nome: nome, cpf: cpf, email: email, senha: senha };
    //   adicionarUsuario(usuario);
    //   limparCampos();
    //   alert("Usuário Cadastro com sucesso!")
    //   navigation.navigate('Home');
    // } else {
    //   alert("Favor digitar todos os campos!")
    // }

    if(email !== '' && senha !== '' && email !== null && senha !== null && valideEmail){
      setErrorEmail('');
      setErrorSenha('');
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          limparCampos();
          alert("Usuário Cadastro com sucesso! ")
          navigation.navigate('Home');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Faha na criação do Usuário: " + errorCode + errorMessage);
        });
    } else {
      // alert("Favor digitar todos os campos!");
      if(email === '' || email === null){
        setErrorEmail('Preencha seu e-mail corretamente');
      }
      if(senha === '' || senha === null){
        setErrorSenha('Preecha sua senha corretamente');
      }

    }
  }

  const validarEmail = (email) => {
    // Expressão regular para validar e-mails
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    // Verifica se o e-mail é válido
    setValideEmail(emailRegex.test(email));
  }

  function limparCampos() {
    // setNome('');
    // setCpf('');
    setEmail('');
    setSenha('');
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
                backgroundColor='#497e99'
              />
            }
            title=""
            onPress={() => navigation.navigate('Home')}
          />}
          leftContainerStyle={{ backgroundColor: '#497e99' }}
          centerComponent={{
            text: 'Usuário',
            style: { color: '#fff', fontSize: 25, width: 300, textAlign: 'auto', flex: 1, alignItems: 'center', justifyContent: 'center' }
          }}
          centerContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          containerStyle={{ backgroundColor: '#497e99' }}
        />
      </View>
      {/* <View style={styles2.container}> */}
      <View style={{ flex: 2 }} >
        {/* <TextInput
        style={styles2.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles2.input}
        placeholder="CPF"
        keyboardType="numeric"
        maxLength={11}
        value={cpf}
        onChangeText={setCpf}
      /> */}
        <Input
          style={styles2.input}
          placeholder="Email"
          errorStyle={{ color: 'red' }}
          errorMessage={errorEmail}
          keyboardType="email-address"
          value={email}
          leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='black'
            />
          }
          onChangeText={(text) => {
            setEmail(text);
            setErrorEmail(null);
            // setValideEmail(false);
          }}
          onBlur={() => validarEmail(email)}
        />
        {!valideEmail && <Text style={{ color: 'red' }}>Endereço de e-mail inválido</Text>}
        <Input
          style={styles2.input}
          placeholder="Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          errorStyle={{ color: 'red' }}
          errorMessage={errorSenha}
          secureTextEntry
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setErrorSenha(null);
          }}
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
    backgroundColor: '#497e99',
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

export default CadastroScreen;