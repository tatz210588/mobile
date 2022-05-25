import { Pressable, View, Text, StyleSheet } from "react-native"

const PrimaryButton = ({ children, pressHandler }) => {
    return (
        <View style={styles.iostyle}>    
            <View style={styles.primaryButtonContainer}>
                <Pressable 
                    style={({pressed}) => pressed ? [
                            styles.buttonInnerContainer,
                            styles.pressed
                        ] : 
                        styles.buttonInnerContainer
                    }
                    onPress={pressHandler} 
                    android_ripple={{color: `rgba(255,255,255,0.25)`}}>
                    <Text style={[styles.title]}>{children}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const SecondaryButton = ({ children, pressHandler }) => {
    return (
        <View style={styles.secondaryButtonContainer}>
            <Pressable onPress={pressHandler}>
                <Text style={[styles.title]}>{children}</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Ubuntu_700Bold',
        textAlign: 'center',
        color: '#0085D9'               
    },
    iostyle: {
        flex: 1,
        //ios specific
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 4,
        shadowOpacity: 0.35
    },
    primaryButtonContainer: {
        borderRadius: 4,
        marginHorizontal: 8,        
        elevation: 2,
        overflow: 'hidden',
        

    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        height: 40,
        justifyContent: 'center',

    },
    pressed: {
        opacity: 0.75
    },
    secondaryButtonContainer: {
        flex: 1,
        backgroundColor: "white",
        opacity: '0.25',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 8,
        height: 44,
        justifyContent: 'center'
    }
})

export { PrimaryButton, SecondaryButton }