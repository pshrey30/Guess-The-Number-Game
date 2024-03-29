import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import NumberContainer from '../Components/NumberContainer';
import Primarybtn from '../Components/Primarybtn';
import Title from '../Components/Ui/Title';
import Card from '../Components/Ui/Card';
import Instructions from '../Components/Ui/Instructions';
import GuessLogItem from '../Components/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber); //hard push is done here 
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, SetGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])


    //restart the game
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", 'You know that this is wrong...', [{ Text: 'sorry!', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        SetGuessRounds(prevRounds => [newRndNumber, ...prevRounds])
    }

    const guessRoundListsLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Instructions>Lower or Higher?</Instructions>
                <View style={styles.btnscontainer}>
                    <View style={{ flex: 1 }}>
                        <Primarybtn onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='remove-circle-outline' size={24} color="white" />
                        </Primarybtn>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Primarybtn onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name='add-circle-outline' size={24} color="white" />
                        </Primarybtn>
                    </View>
                </View>
            </Card>
            {/* <View>LOG CONTENT</View> */}
            <FlatList
                data={guessRounds}
                renderItem={(itemData) => <GuessLogItem
                    roundNumber={guessRoundListsLength - itemData.index}
                    guess={itemData.item}
                />
                }
                keyExtractor={(item) => item}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 20
    },
    btnscontainer: {
        flexDirection: 'row',
        margin: 15
    }
})

export default GameScreen