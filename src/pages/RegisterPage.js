import React, {useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, 
    Keyboard, TouchableWithoutFeedback } from 'react-native'
import LanguageSelector from '../components/LanguageSelector';    
import GenerateOTP from '../components/GenerateOTP';
import VerifyOTP from '../components/VerifyOTP';
import { Constants } from '../../util/Constant';
//References
// You can import from local files
/* 
1. https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage#single-item
2. https://stackoverflow.com/questions/29685421/hide-keyboard-in-react-native
*/

export default function RegisterPage() {

    const [verifyOTP, setVerifyOTP] = useState(false);
   
   
  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>  
                    
                <View style={styles.dropDownContainer}>
                   <LanguageSelector />
                </View>
                <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}
                >
                    <Image 
                        source={require("../../assets/images/globe.png")} 
                        style={{
                            height: 30,
                            width: 30
                        }}           
                    />
                </View>
                
                {!verifyOTP ?
                    <>
                        <Text style={styles.paragraph}>Enter your mobile no</Text>
                        <View style={[styles.itemCenter, styles.inputNameContainer]}>
                            <TextInput placeholder='Enter your name'
                                placeholderTextColor={'#FFF'}
                                style={styles.nameInputText} 
                                />
                        </View>
                        <GenerateOTP  onGenerateOTPTap={() => setVerifyOTP(true)} /> 
                    </>
                        :
                    <VerifyOTP />
                }
            </View>
        </TouchableWithoutFeedback>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  paragraph: {
    marginVertical: 30,
    marginHorizontal: 25,
    fontSize: 26,
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'center',
    color: 'white'
  },
  dropDownContainer:{
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 20,
  },
  nameInputText: {
    width: '100%',
    fontSize: 18,
    fontFamily: 'Ubuntu_400Regular',
    color: 'white',
  },
  inputNameContainer:{
    height: 40,
    marginHorizontal: 10,
    backgroundColor: Constants.semiWhiteBackground,
    borderColor: 'white',
    borderWidth: 1.5,
    borderRadius: 4.5,
    padding: 8,
    
  },

  
});