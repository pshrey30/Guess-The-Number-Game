import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../Components/Ui/Title'
import Primarybtn from '../Components/Primarybtn'

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    return (
        <View style={styles.screen}>
            <Title>Game Over!!!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.img}
                    source={require('../assets/Images/success.png')}
                />
            </View>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
                Your phone needed <Text style={{ fontWeight: 'bold' }}>{roundsNumber}</Text> times to guess the number <Text style={{ fontWeight: 'bold' }}>{userNumber}</Text>.
            </Text>
            <Primarybtn onPress={onStartNewGame}>Game Over</Primarybtn>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        overflow: 'hidden',
        margin: 36
    },
    img: {
        height: '100%',
        width: '100%'
    }
})