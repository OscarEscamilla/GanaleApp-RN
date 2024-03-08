import { View, Text, Button, FlatList, ImageBackground, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OpenAI from 'openai';
import { API_KEY } from '../config/OpenIAConfig';
import axios from 'axios'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const TopicDetailScreen = ({ route, navigation }) => {

  const { item } = route.params

  const [questions, setQuestions] = useState([])

  const fetchAIResponse = async () => {
    clearData()
    const OPENAI_API_KEY = API_KEY; // Replace with your actual OpenAI API key
    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'listame los 5 mejores hoteles en cancun' }],
    };
    const response = await axios.post('https://api.openai.com/v1/chat/completions', requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
    })
    setQuestions(response);
  }

  const clearData = () => {
    setQuestions([]);
  };

  return (
    <>
      <SafeAreaView className="felx">
        <View className="flex h-80">
          <ImageBackground
            source={{
              uri: item.url_image
            }}
            className="flex-1 bg-cover justify-center"
          >
            <View className="p-4 flex-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <TouchableOpacity className="felx-1" onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size={24} color='white'></ArrowLeftIcon>
              </TouchableOpacity>
              <Text className="text-white pt-8 font-bold text-2xl align-bottom">{item.title}</Text>
              <Text className="text-white text-lg" align-bottom>{item.description}</Text>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>

  )
}

export default TopicDetailScreen