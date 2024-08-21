import { StyleSheet } from "react-native";
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.darkgreen,
        margin: 10,
        padding: 2,
        borderRadius: 10,
    },

    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

    },

    user: {
        color: 'white'
    },

    date: {
        fontStyle: 'italic',
        color: 'white'
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },

    dislike_count_container: {
        backgroundColor: colors.darkgreen,
        padding: 3,
        borderRadius: 20,
        marginRight: 3,
    },

    dislike_container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
    },

    dislike_text: {
        color: colors.darkgreen,
        fontWeight: 'bold',
    },

    dislike_count_text: {
        color: 'white',
        fontWeight: 'bold',
    },

    footer: {
        alignItems: 'flex-end',
    }

})