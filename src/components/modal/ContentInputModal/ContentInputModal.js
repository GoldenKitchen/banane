import React, {useState} from "react";
import {View, TextInput} from 'react-native';
import styles from './ContentInputModal.styles';
import Button from '../../Button/Button';
import Modal from 'react-native-modal';
import database from '@react-native-firebase/database';

const ContentInputModal = ({visible, onClose, onSend}) => {

    const [text, setText] = useState('');
    
    function handleSend() {
        console.log('input', text)
        if (!text){
            return;
        }
        onSend(text);
        setText('');
        
    }
    return(
        <Modal 
        style = {styles.modal}
        onSwipeComplete={onClose} 
        onBackdropPress={onClose} 
        onBackButtonPress={onClose}
        isVisible={visible} >
            <View style={styles.container} >
                <View style={styles.input_container} >
                <TextInput 
                placeholder = "Darla hadi milleti..."


                onChangeText={setText}
                value={text}
                multiline
                />
                </View>
                <Button text="Gönder" onPress={handleSend}/>
            </View>
        </Modal>
    )
}

export default ContentInputModal;