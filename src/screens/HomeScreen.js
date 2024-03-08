import { View, Text, SafeAreaView, StatusBar ,Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { triviaTopics } from '../data/TriviaCategories'
import { topicCategories } from '../data/topicCategories'
import TopicCard from '../components/TopicCard'
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { ArrowLeftIcon } from 'react-native-heroicons/solid'


const HomeScreen = ({navigation}) => {


    return (
        <>
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="default"></StatusBar>
            {/* HEADER */}
            <View className="flex-row items-center space-x-1  px-4 py-2">
                <Text className=" flex-1 text-2xl font-bold ">Hola Username!</Text>
                <Text className="text-green-800 text-lg font-bold ">25</Text>
                <Image source={{
                    uri: "https://assets.materialup.com/uploads/bcf6dd06-7117-424f-9a6e-4bb795c8fb4d/preview.png"
                }}
                    className="h-8 w-8"
                ></Image>
            </View>
            <View className="flex-row space-x-1 bg-gray-200 mx-4 p-3 mb-2 rounded-md">
                <MagnifyingGlassIcon color="gray" size={20}/>
                <TextInput
                    className="flex-1"
                    placeholder="Busca un tema"
                    keyboardType="default"
                />
            </View>
            {/* BODY */}
            <ScrollView
                className="pb-80"
                showsVerticalScrollIndicator={false}
               >
                {/* BANNER */}
                <Text className="text-lg font-bold mx-4 mt-4 ">Topics</Text>
                <Text className="mx-4 ">Selecciona un tema y comienza a ganar!</Text>
                {topicCategories.map((item) => {
                    return (
                        <TopicCard key={item.id} item={item} onClick={() => navigation.navigate('TopicDetail',{item}) }></TopicCard>
                    )
                })}
            </ScrollView>

        </SafeAreaView>
        </>
    )
}

export default HomeScreen