import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FloatingButtonStyles from "./FloatingButton.styles";
import styles from './FloatingButton.styles';

const FloatingButton = ({onPress, icon}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={icon} color="white" size={30} />
        </TouchableOpacity>
    )
}

export default FloatingButton;