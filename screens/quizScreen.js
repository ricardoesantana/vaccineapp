import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Avatar, Input, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const questions = {
  easy: [
    {
      question: 'Qual vacina previne a poliomielite?',
      options: ['BCG', 'DTP', 'Sabin', 'Tríplice viral'],
      answer: 'Sabin',
    },
    {
      question: 'Qual é o componente mais importante da vacina contra a gripe?',
      options: ['Vírus inativo', 'Adjuvante', 'Mercúrio', 'Vírus atenuado'],
      answer: 'Vírus inativo',
    },
    {
      question: 'Quem desenvolveu a primeira vacina contra a varíola?',
      options: ['Albert Sabin', 'Edward Jenner', 'Jonas Salk', 'Louis Pasteur'],
      answer: 'Edward Jenner',
    },
  ],
  medium: [
    {
      question: 'Qual é o número recomendado de doses da vacina MMR (tríplice viral)?',
      options: ['1', '2', '3', '4'],
      answer: '2',
    },
    {
      question: 'Qual doença é prevenida pela vacina contra a Hepatite B?',
      options: ['Hepatite A', 'Hepatite B', 'Hepatite C', 'HIV'],
      answer: 'Hepatite B',
    },
    {
      question: 'A vacina contra a febre amarela é administrada com que frequência?',
      options: ['1 vez ao ano', '1 vez a cada 5 anos', '1 vez a cada 10 anos', '1 vez na vida'],
      answer: '1 vez a cada 10 anos',
    },
  ],
  hard: [
    {
      question: 'Qual é o organismo responsável pela certificação de vacinas nos EUA?',
      options: ['FDA', 'CDC', 'OMS', 'NIH'],
      answer: 'FDA',
    },
    {
      question: 'Em que ano a vacina contra a pólio foi introduzida no Brasil?',
      options: ['1956', '1962', '1973', '1980'],
      answer: '1956',
    },
    {
      question: 'Qual doença é prevenida pela vacina pneumocócica conjugada?',
      options: ['Tuberculose', 'Pneumonia', 'Sarampo', 'Difteria'],
      answer: 'Pneumonia',
    },
  ],
};

function QuizScreen({ route, navigation }) {
  
    const [level, setLevel] = useState('easy');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showCorrect, setShowCorrect] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleAnswerButtonClick = (selectedOption) => {
      if (showCorrect === null) {
        setSelectedOption(selectedOption);
        if (selectedOption === questions[level][currentQuestion].answer) {
          setScore(score + 1);
        }
        setShowCorrect(selectedOption === questions[level][currentQuestion].answer);
      }
    };
  
    const handleNextButtonClick = () => {
      setSelectedOption(null);
      setShowCorrect(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions[level].length) {
        setCurrentQuestion(nextQuestion);
      } else {
        if (level === 'easy') {
          setLevel('medium');
          setCurrentQuestion(0);
        } else if (level === 'medium') {
          setLevel('hard');
          setCurrentQuestion(0);
        } else {
          setShowScore(true);
        }
      }
    };
  
    const handleRestartButtonClick = () => {
      setLevel('easy');
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      setShowCorrect(null);
      setSelectedOption(null);
    };
  
    return (
      <View style={styles.container}>
        {showScore ? (
          <View style={styles.title}>
            <Text style={styles.title}>
              Você acertou {score} de {questions.hard.length + questions.medium.length + questions.easy.length} perguntas!
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleRestartButtonClick}>
              <Text style={styles.buttonText}>Reiniciar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.title}>
            <Text style={styles.title}>
              Nível: {level} | Pergunta {currentQuestion + 1} de {questions[level].length}
            </Text>
            <Text style={styles.title}>{questions[level][currentQuestion].question}</Text>
            <View >
              {questions[level][currentQuestion].options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleAnswerButtonClick(option)}
                  style={[
                    styles.answerButton,
                    {
                      backgroundColor: selectedOption === option ? (showCorrect ? 'green' : 'red') : 'white',
                    },
                  ]}
                  disabled={showCorrect !== null}
                >
                  <Text style={styles.answerButtonText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {showCorrect && <Text style={styles.title}>Resposta correta!</Text>}
            {showCorrect === false && (
              <Text style={styles.title}>
                Resposta incorreta! A alternativa correta é: {questions[level][currentQuestion].answer}
              </Text>
            )}
            {showCorrect !== null && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleNextButtonClick}
                disabled={showCorrect === null || currentQuestion >= questions[level].length}
              >
                <Text style={styles.buttonText}>Próxima pergunta</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Inicial')}>
        <Text style={styles.buttonText} > VOLTAR </Text>
      </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#497e99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 24,
    marginLeft: 24,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    //padding: (8,7,8,7),
    color: 'white',
  },
  title2: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    //padding: (8,7,8,7),
    color: 'white',
  },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 10,
    color: '#000000',
    borderRadius: 14,
    fontSize: 30,
  },
  button: {
    backgroundColor: '#1c313a',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '85%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 22,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#1c313a',
    margin: 10,
    padding: 10,
    //margin: (0,0,0,20),
  },
  answerButton:{
    color: 'black',
    fontSize: 20,
    margin: 10,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuizScreen;