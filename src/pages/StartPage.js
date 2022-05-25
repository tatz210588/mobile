import {React, useState} from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { PrimaryButton, SecondaryButton } from '../components/PrimaryButtons'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

const Title = "One Unified Crypto Interface"
const REGISTER_SCREEN = "register"
const LOGIN_SCREEN = "login"

const StartPage = () => {
    const [showScreen, setShowScreen] = useState(null)
    const onRegister = () => {
        setShowScreen(REGISTER_SCREEN)
    }
    
    const onLogin = () => {
        setShowScreen(LOGIN_SCREEN)
    }

    if (!!showScreen && showScreen === LOGIN_SCREEN) {
        return <LoginPage />
    }
    else if (!!showScreen && showScreen === REGISTER_SCREEN){
        return <RegisterPage />
    }
    else{
        return (
            <View style={styles.container}>
                <View style={styles.iconTextContainer}>
                    <Image source={require("../../assets/images/app-icon.png")}
                        style={styles.appIcon}/>
                    <Text style={styles.title}>{Title}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={onRegister} >Register</PrimaryButton>
                    <PrimaryButton pressHandler={onLogin}>Login</PrimaryButton>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,    
    },
    
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 24
    },
    iconTextContainer: {
        marginTop: 160,
        alignItems: 'center',
        padding: 5
    },
    appIcon: {
        width: 207,
        height: 191,
    },
    title: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
        color: '#FFFFFF'        
    }
  });
export default StartPage