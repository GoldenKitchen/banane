import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import FloatingButton from '../../../components/FloatingButton/FloatingButton';
import styles from './Messages.styles';
import ContentInputModal from '../../../components/modal/ContentInputModal/ContentInputModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../../utils/parseContentData';
import MessageCard from '../../../components/card/MessageCard/MessageCard';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState();

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        if (!contentData) {
          return;
        }
        const parseData = parseContentData(contentData || {});
        setContentList(parseData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };

    database().ref('messages/').push(contentObject);
  }

  function handleBanane(item) {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  }

  const renderContent = ({item}) => (
    <MessageCard message={item} onBanane={() => handleBanane(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />

      <FloatingButton icon="plus" onPress={handleInputToggle} />

      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
