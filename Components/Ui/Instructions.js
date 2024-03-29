import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Instructions = ({ children }) => {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

export default Instructions

const styles = StyleSheet.create({
    instructionText: {
        color: '#ddb52f',
        fontSize: 24,
    },
})