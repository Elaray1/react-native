import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

import styles from './Home.styles';

const getRandomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
const min = 1;
const max = 100;

function HomeScreen() {
  const [gameStage, setGameStage] = useState({
    step: 0,
    message: 'Guess the number',
    buttonTitle: 'Start game',
  });
  const [inputValue, onChangeInputValue] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const onButton = () => {
    const value = +inputValue;
    if (gameStage.step === 0 || gameStage.step === 2) {
      setRandomNumber(getRandomInteger(min, max));
      setGameStage({
        step: 1,
        message: `Guess the number (${min}, ${max})`,
        buttonTitle: 'Check'
      });
    } else if (!inputValue.length || Number.isNaN(value)) {
      setGameStage({ ...gameStage, message: 'Incorrect value' });
    } else {
      if (value > randomNumber) setGameStage({ ...gameStage, message: 'Less ¯\_(ツ)_/¯' });
      else if (value < randomNumber) setGameStage({ ...gameStage, message: 'More ᕦ(ò_óˇ)ᕤ' });
      else {
        setGameStage({
          step: 2,
          message: '🎉 Congrats! 🎉',
          buttonTitle: 'Play again',
        });
        onChangeInputValue('');
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>{gameStage.message}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(v) => onChangeInputValue(v)}
        value={inputValue}
        editable={gameStage.step !== 0 && gameStage.step !== 2}
      />
      <View style={styles.button}>
        <Button
          onPress={() => onButton()}
          title={gameStage.buttonTitle}
          color="#fff"
        />
      </View>
    </View>
  );
}

export default HomeScreen;
