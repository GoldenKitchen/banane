import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.styles";

const Button = ({text, theme = "primary" , onPress }) => {
    return(
        <TouchableOpacity onPress={onPress} style= {styles[theme].container} >
            <View>
                <Text style= {styles[theme].button_text} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;