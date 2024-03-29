import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Primarybtn = ({ children, onPress }) => {
    // const HandlePress = () => {
    //     console.log('pressed!!');
    // }
    return (
        <View style={styles.outerbtnContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.innerbtnContainer, styles.pressed] : styles.innerbtnContainer}
                android_ripple={{ color: '#c80b6a' }}
                onPress={onPress}
            >
                <Text style={styles.buttontext}>{children}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    outerbtnContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden'
    },
    innerbtnContainer: {
        backgroundColor: '#9a0951',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4
    },
    buttontext: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.50
    }
})


export default Primarybtn