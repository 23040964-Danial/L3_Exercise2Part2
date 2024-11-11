import React, { useState } from 'react';
import { View, Text, Button, Alert, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [selectedAnswer1, setSelectedAnswer1] = useState('');
  const [selectedAnswer2, setSelectedAnswer2] = useState('');
  const [selectedAnswer3, setSelectedAnswer3] = useState('');

  // Questions and answers
  const questions = [
    {
      id: 1,
      image: '../img/bee.jpg', // Replace with actual image URL
      correctAnswer: 'bee',
      options: [
        { label: 'bee', value: 'bee' },
        { label: 'crocodile', value: 'crocodile' },
        { label: 'deer', value: 'deer' }
      ]
    },
    {
      id: 2,
      image: '../img/crocodile.jpg', // Replace with actual image URL
      correctAnswer: 'crocodile',
      options: [
        { label: 'bee', value: 'bee' },
        { label: 'crocodile', value: 'crocodile' },
        { label: 'deer', value: 'deer' }
      ]
    },
    {
      id: 3,
      image: '../img/deer.jpg', // Replace with actual image URL
      correctAnswer: 'deer',
      options: [
        { label: 'bee', value: 'bee' },
        { label: 'crocodile', value: 'crocodile' },
        { label: 'deer', value: 'deer' }
      ]
    }
  ];

  // Submit Answers and calculate score
  const handleSubmit = () => {
    let newScore = 0;
    if (selectedAnswer1 === questions[0].correctAnswer) newScore++;
    if (selectedAnswer2 === questions[1].correctAnswer) newScore++;
    if (selectedAnswer3 === questions[2].correctAnswer) newScore++;

    setScore(newScore);
    Alert.alert(`Your Score: ${newScore} out of 3`);
  };

  return (
      <View style={{ padding: 20, paddingTop: 50 }}>
        <View style={{ marginBottom: 20 }}>
          <Image source={{ uri: questions[0].image }} style={{ width: 100, height: 100 }} />
          <Text>Identify the animal:</Text>
          <RNPickerSelect
              onValueChange={(value) => setSelectedAnswer1(value)}
              items={questions[0].options}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Image source={{ uri: questions[1].image }} style={{ width: 100, height: 100 }} />
          <Text>Identify the animal:</Text>
          <RNPickerSelect
              onValueChange={(value) => setSelectedAnswer2(value)}
              items={questions[1].options}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Image source={{ uri: questions[2].image }} style={{ width: 100, height: 100 }} />
          <Text>Identify the animal:</Text>
          <RNPickerSelect
              onValueChange={(value) => setSelectedAnswer3(value)}
              items={questions[2].options}
          />
        </View>

        <Button title="Submit Answers" onPress={handleSubmit} />
      </View>
  );
};

export default QuizApp;
