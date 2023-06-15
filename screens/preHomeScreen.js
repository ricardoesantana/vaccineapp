import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Avatar, Input, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function PreHomeScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <Avatar size="xlarge" rounded
        source={{
          uri: "https://img.freepik.com/vetores-premium/medico-com-uma-vacina-covid-19-corre-atras-de-uma-bacteria-coronavirus-conceito-de-vacinacao-design-plano-de-ilustracao-vetorial-injecao-em-seringa-ambulancia-com-kit-de-primeiros-socorros-e-vacina-contra-a-gripe_153097-299.jpg?w=2000"
        }} style={styles.avatar} />
        
      <Text style={styles.title}> VACCINE APP </Text>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.buttonText} > ENTRAR </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
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
    marginBottom: 20,
  },
});

export default PreHomeScreen;