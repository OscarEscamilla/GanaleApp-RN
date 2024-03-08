import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const TopicCard = ({ item, onClick }) => {
    return (
        <TouchableOpacity onPress={() => { onClick() }} >
            <View className="flex-1 mx-4 mt-3 rounded-md shadow-md h-28">
                <ImageBackground
                    source={{
                        uri: item.url_image
                    }}
                    className="flex-1 bg-cover justify-center  rounded-md"
                    imageStyle={{ borderRadius: 5 }}
                >
                    <View className="justify-center p-4 py-6 rounded-md h-28" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <Text className="text-white font-bold text-lg">{item.title}</Text>
                        <Text className="text-white text-sm">{item.description}</Text>
                    </View>

                </ImageBackground>
            </View>
        </TouchableOpacity>

    )
}

export default TopicCard