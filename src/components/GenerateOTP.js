import React, {useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native'
import CountryPicker, 
{ getAllCountries, getCallingCode } from 'react-native-country-picker-modal';
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton } from './PrimaryButtons';
import { Constants } from '../../util/Constant';

const GenerateOTP = ({onGenerateOTPTap}) => {
     //Phone input variables
     const [countryCode, setCountryCode] = useState('IN')
     const [country, setCountry] = useState(null)
     const [withCountryNameButton, setWithCountryNameButton] = useState(false)
     const [withFlag, setWithFlag] = useState(true)
     const [withFilter, setWithFilter] = useState(true)
     const [withCallingCode, setWithCallingCode] = useState('91')
 
     const onSelect = (country) => {
         console.log(country)
         setCountryCode(country.cca2)
         setCountry(country)
         setWithCallingCode(country.callingCode)
     }
 

     return (
         <>
            <View style={styles.phoneNoContainer}>
                <View style={[styles.itemCenter,{
                    backgroundColor: Constants.semiWhiteBackground,
                    flexDirection: 'row',                    
                }]}>

                    <CountryPicker 
                        {
                            ...{
                                countryCode,
                                withFilter,
                                withFlag,
                                withCountryNameButton,
                                withCallingCode,
                                onSelect,
                            }
                        }
                        containerButtonStyle={{
                            paddingLeft: 4
                        }}
                        >
                    </CountryPicker>
                    
                    <Ionicons name="caret-down-outline" size={15} color="black" 
                        style={{
                            // marginLeft: -10
                            paddingRight: 8
                        }}
                    />
                </View>
                
                <View style={[styles.itemCenter, {backgroundColor: Constants.semiWhiteBackground}]}>
                    <Text style={styles.phoneCountryCode}>(+{withCallingCode})</Text>
                </View>
                <View style={[styles.itemCenter, {
                        flex: 1,
                        backgroundColor: Constants.semiWhiteBackground
                        }]}>
                    <TextInput placeholder='00000-00000'
                        placeholderTextColor={'#FFF'}
                        style={styles.phoneInputText} 
                        maxLength={10}
                        keyboardType="number-pad"
                        
                        />
                </View>
                
            </View>
            <View style={{flex: 1}}>
                <PrimaryButton pressHandler={onGenerateOTPTap}>Generate OTP</PrimaryButton>
            </View>
         </>
     )
}

const styles = StyleSheet.create({
    
      phoneNoContainer:{
        height: 40,
        marginHorizontal: 10,
        marginVertical: 20,
        // padding: 4,
        flexDirection: 'row',
        alignContent: 'center',
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 4.5
      },
      phoneCountryCode: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Ubuntu_500Medium',
        marginHorizontal: 10
      },
      itemCenter: {
        justifyContent:'center',
        alignItems: 'center'
      },
      phoneInputText:{
        width: '100%',
        fontSize: 18,
        fontFamily: 'Ubuntu_400Regular',
        color: 'white',
      }
})

export default GenerateOTP