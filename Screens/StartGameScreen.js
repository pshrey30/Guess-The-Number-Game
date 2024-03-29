import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Primarybtn from '../Components/Primarybtn'
import Title from '../Components/Ui/Title'
import Card from '../Components/Ui/Card'
import Instructions from '../Components/Ui/Instructions'

const StartGameScreen = ({ onConfirmNumber }) => {
    const [enteredNum, setEnteredNum] = useState('')

    const inputHandler = (text) => {
        setEnteredNum(text);
    }
    const confirmInputHandler = () => {
        //the string will try to convert into number
        const chosenNumber = parseInt(enteredNum);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number',
                'Enter the number between 1 to 99',
                [{ text: 'Okay', style: 'destructive' }])
            return;
        }
        onConfirmNumber(chosenNumber);
    }

    const resetInputHandler = () => [
        setEnteredNum('')
    ]
    return (
        <View style={styles.rootContainer}>
            <Title>Guess the Number</Title>
            <Card>


                <Instructions>Enter the Number</Instructions>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    value={enteredNum}
                    onChangeText={inputHandler}
                />
                <View style={styles.btnscontainer}>
                    <View style={{ flex: 1 }}>
                        <Primarybtn onPress={resetInputHandler}>Reset</Primarybtn>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Primarybtn onPress={confirmInputHandler}>Confirm</Primarybtn>
                    </View>
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 80,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        color: '#ddb52f',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        marginVertical: 10
    },
    btnscontainer: {
        flexDirection: 'row',
    }
})


export default StartGameScreen;