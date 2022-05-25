import DropDownPicker from 'react-native-dropdown-picker'
import React, {useState } from 'react';
import { View, StyleSheet } from 'react-native'

const LanguageSelector = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('en');
    const [items, setItems] = useState([
        {label: 'English (en)', value: 'en'},
        {label: 'Deutsch (de)', value: 'de'},
        {label: 'French (fr)', value: 'fr'},
    ]);
    
    return (
        <DropDownPicker
        labelStyle={{
            color: 'white',
            fontFamily: 'Ubuntu_300Light', 
        }}
        open={open}
        value={value}
        items={items}
        theme="LIGHT"
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}     
        arrowIconStyle={styles.arrowIcon}      
        listItemLabelStyle={{
            fontSize: 12,
            fontFamily: 'Ubuntu_300Light', 
        }}
        selectedItemLabelStyle={{
            fontSize: 12,
            fontFamily: 'Ubuntu_300Light',
        }}
        listItemContainerStyle={{
            height: 30
        }}
        selectedItemContainerStyle={{
            backgroundColor: "transparent"
        }}
        
        style={styles.dropDown}
    />
    )
}

const styles = StyleSheet.create({
    dropDown: {
        backgroundColor: "rgba(0,0,0,0)",
        color: 'white',
        borderColor: 'white',    
          
    },
    arrowIcon:{
        width: 20,
        height: 20,
        tintColor: 'white'
      },
})

export default LanguageSelector