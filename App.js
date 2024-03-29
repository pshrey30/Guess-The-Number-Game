import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {
  const [userNumber, SetUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, SetGuessRound] = useState(0);

  const pickedNumberHandler = (text) => {
    SetUserNumber(text);
    setGameIsOver(false);
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    SetGuessRound(numberOfRounds);

  }

  const startNewGameHandler = () => {
    SetUserNumber(null);
    SetGuessRound(0);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRound} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }


  return (
    <LinearGradient colors={['#b3095e', '#ddb52f']} style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/Images/background.png')}
        style={{ flex: 1 }}
        resizeMode='cover'
        imageStyle={styles.ImageBackground}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    opacity: 0.15
  }
});
