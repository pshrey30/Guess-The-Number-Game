import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StartGameScreen from '../Screens/StartGameScreen';
import GameScreen from '../Screens/GameScreen';
import GameOverScreen from '../Screens/GameOverScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <LinearGradient colors={['#b3095e', '#ddb52f']} style={{ flex: 1 }}>
            <ImageBackground
                source={require('..//assets/Images/background.png')}
                style={{ flex: 1 }}
                resizeMode='cover'
                imageStyle={styles.ImageBackground}
            >
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Start" options={{ headerShown: false }} component={StartGameScreen} />
                        <Stack.Screen name="Game" options={{ headerShown: false }} component={GameScreen} />
                        <Stack.Screen name="Over" options={{ headerShown: false }} component={GameOverScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    ImageBackground: {
        opacity: 0.15
    }
});

export default Navigation