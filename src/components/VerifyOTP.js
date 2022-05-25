import React, {useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field'
import { Constants } from '../../util/Constant';

import { PrimaryButton } from './PrimaryButtons';

const CELL_COUNT = 4;
/*
References:
1.https://github.com/retyui/react-native-confirmation-code-field/tree/master/examples/DemoCodeField
*/
const VerifyOTP = ({code="91", phoneNo="0000-0000"}) => {
     //OTP input variables
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const resendOtp = () => {

    }

     return (
         <>
            <Text style={styles.paragraph}>OTP Verification</Text>
            <Text style={styles.smallParagraph}>Please enter the OTP sent to +{code} {phoneNo}</Text>

            <View style={styles.verifyCodeContainer}>
                
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                        )}
                    />                   
                
                <View style={styles.itemCenter}>
                    <TouchableOpacity onPress={resendOtp}>
                    <Text style={styles.smallText}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
            <View style={{flex: 1}}>
                <PrimaryButton>Verify OTP</PrimaryButton>
            </View>
         </>
     )
}

const styles = StyleSheet.create({
    paragraph: {
        marginVertical: 30,
        marginHorizontal: 25,
        fontSize: 26,
        fontFamily: 'Ubuntu_700Bold',
        textAlign: 'center',
        color: 'white'
    },
    smallParagraph:{
          marginVertical: 10,
          marginHorizontal: 25,
          fontSize: 16,
          fontFamily: 'Ubuntu_500Medium',
          textAlign: 'center',
          color: 'white'

      },
      smallText:{
        marginVertical: 20,
        marginHorizontal: 25,
        fontSize: 14,
        fontFamily: 'Ubuntu_300Light',
        textAlign: 'center',
        color: 'white'
      },
      verifyCodeContainer:{
          
        alignItems: 'center'
      },
        root: {flex: 1, padding: 10},
    
        codeFieldRoot: {marginTop: 20},
        cell: {
            width: 40,
            height: 40,
            lineHeight: 38,
            fontSize: 28,
            fontFamily: 'Ubuntu_500Medium',
            borderWidth: 2,
            borderColor: '#FFF',            
            color: 'white',
            textAlign: 'center',
            marginHorizontal: 10,
            backgroundColor: Constants.semiWhiteBackground
        },
        focusCell: {
            borderColor: '#FFF',
            borderWidth: 2,
          },
})

export default VerifyOTP