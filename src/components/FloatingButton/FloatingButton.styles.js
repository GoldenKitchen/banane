import { StyleSheet } from "react-native";
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.darkgreen,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        //alignSelf: 'flex-end'
    }
})