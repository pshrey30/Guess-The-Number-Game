import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View style={styles.listitems}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listitems: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 20,
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#ddb52f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
    }
})