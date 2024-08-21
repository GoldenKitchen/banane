import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import styles from "./Login.styles";
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initialFormValues = {
    usermail: '',
    password: '',
};

const Login = ({ navigation }) => {

    function handleSignUp() {
        navigation.navigate('Sign');
    }
    
    async function handleFormSubmit(formValues) {
        try{
        await auth().signInWithEmailAndPassword(
            formValues.usermail, 
            formValues.password);
            navigation.navigate('Message');
        }catch(error){
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger',
            })
        } 
    }
    return (
        <SafeAreaView>
            <Text style={styles.header}>bana ne? </Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>{({ values, handleChange, handleSubmit }) => (
                <>
                    <Input
                        onType={handleChange('usermail')}
                        value={values.usermail}
                        placeholder="e-postanızı giriniz..."
                    />

                    <Input
                        onType={handleChange('password')}
                        value={values.password}
                        placeholder="şifrenizi giriniz..."
                        isSecure
                    />

                    <Button text="Giriş Yap" onPress={handleSubmit} />
                </>
            )}
            </Formik>
           
            <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
        </SafeAreaView>
    )
}

export default Login;