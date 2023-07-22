import { linkWithRedirect } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { Touchable } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import { Button, Avatar, Input, Overlay, withTheme } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function InicialScreen({ route, navigation }) {

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

     <View>   
      <Text style={styles.title}> Olá, { nome } ! </Text>
      <Text style={styles.title}> CPF: 000.000.000-00 </Text>
      <Text style={styles.title}> Unidade de Ref: Unidade Básica de Saúde </Text>
     </View>

     <View>
      <Avatar size="xlarge" rounded
        source={{
          uri: "https://hemos.com.br/wp-content/uploads/2020/06/2186.349-Vacina-hist%C3%B3ria-e-import%C3%A2ncia-Blog_v2APROVADO.png"
        }} style={styles.avatar}
        onPress={()=>navigation.navigate('HistVac')} />
    <Text style={styles.title2}> Histórico de Vacinação </Text>

    <Avatar size="xlarge" rounded
        source={{
          uri: "https://unidombosco.edu.br/blog/wp-content/uploads/2023/03/quem-faz-o-curso-de-historia-e-historiador-Copy-_Copy_.webp"
        }} style={styles.avatar}
        onPress={()=>navigation.navigate('Historia')} />
      <Text style={styles.title2}> História da vacina </Text>
     
      <Avatar size="xlarge" rounded
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZZ7KTb_bocTUTck4oAIUghCvFNhLBiLd9A&usqp=CAU"
        }} style={styles.avatar}
        onPress={()=>navigation.navigate('Unidades')} />
      <Text style={styles.title2}> Unidades de Saúde </Text>

    <Avatar size="xlarge" rounded
        source={{
          uri: "https://img.freepik.com/vetores-premium/quiz-no-estilo-quadrinhos-pop-art_175838-505.jpg?w=2000"
        }} style={styles.avatar}
        onPress={()=>navigation.navigate('Quiz')} />
    <Text style={styles.title2}> Quiz Vacinas </Text>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.buttonText} > ENTRAR </Text>
      </TouchableOpacity> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: '#497e99',
    flexDirection: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 14,
    marginLeft: 0,
    padding: (3,2,3,2),
    textAlign: 'center',
    color: '#497e99',
    backgroundColor: 'white'
  },
  title2: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: (4,3,4,3),
    textAlign: 'center',
    color: 'white',
  },
  input: {
    width: '50%',
    height: '50%',
    backgroundColor: '#f2f2f2',
    margin: 3,
    padding: 4,
    color: '#000000',
    borderRadius: 14,
    alignItems: 'center',
    fontSize: 28,
  },
  button: {
    backgroundColor: '#1c313a',
    padding: 10,
    margin: 20,
    borderRadius: 14,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 22,
  },
  avatar: {
    width: 150,
    height: 100,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#1c313a',
    padding: (4,3,4,3),
    //alignItems: 'center',
    //margin: (20,10,10,20),
  },
});

export default InicialScreen;