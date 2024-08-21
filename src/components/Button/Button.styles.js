import { StyleSheet } from "react-native";
import colors from '../../styles/colors';


const base_style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10,
        height: 40,
        alignItems: 'center',
        borderRadius: 8,
        
    },
    button_text: {
        alignContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default {

    

    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.darkgreen,  
        },
        button_text: {
            ...base_style.button_text,
            color: 'white',
        }
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container: {     
            ...base_style.container,
            //backgroundColor: 'white',
            borderWidth: 1,
            borderColor: colors.darkgreen,
        },
        button_text: {
            ...base_style.button_text,
            //color: '#00897c',
            color: colors.darkgreen, 
        }
    })
}

