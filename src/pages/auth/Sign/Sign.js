import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import styles from './Sign.styles';
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
};

const Sign = ({navigation}) => {
    function handleLogin(){
        navigation.goBack();
    }

    async function handleFormSubmit(formValues) {
        if(formValues.password !== formValues.repassword){
            showMessage({
                message: "eşleşmiyor",
                type: "danger",
            });
            return;
        }

        try{
            await auth().createUserWithEmailAndPassword(
                formValues.usermail, 
                formValues.password);
                
                navigation.navigate('Login');
                showMessage({
                    message: 'Kullanıcı oluşturuldu',
                    type: 'success',
                });
                

        }catch(error){
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger',
            })
        }
    }
    return(
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

                    <Input
                        onType={handleChange('repassword')}
                        value={values.repassword}
                        placeholder="şifrenizi tekrar giriniz..."
                        isSecure
                    />              
                    <Button text="Kayıt Ol" onPress={handleSubmit} />
                    
                </>
            )}
            </Formik>
            <Button text="Geri" theme="secondary"  onPress={handleLogin} />
           
            
        </SafeAreaView>
    )
}

export default Sign;