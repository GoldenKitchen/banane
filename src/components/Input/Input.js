import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./Input.styles";

const Input = ({placeholder, value, onType, isSecure}) => {
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder={placeholder} 
            value={value}
            onChangeText={onType}
            secureTextEntry={isSecure}
            />
        </View>
    )
}

export default Input;