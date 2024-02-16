import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const TopicCard = ({ item }) => {
    return (
        <View className="flex-1 mx-4 mt-3 rounded-md shadow-md">
            <ImageBackground 
                source={{
                uri: item.image_url
                }}
                className="flex-1 bg-cover justify-center  rounded-md" 
                imageStyle={{borderRadius: 5}}   
            >
                <View className="p-4 py-6 rounded-md"  style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <Text className="text-white font-bold text-lg">{item.title}</Text>
                    <Text className="text-white text-sm">{item.description}</Text>
                </View>
                
            </ImageBackground>
        </View>
       
    )
}

export default TopicCard