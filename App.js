import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import TopicDetailScreen from './src/screens/TopicDetailScreen';
import MatchScreen from './src/screens/MatchScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="TopicDetail" options={{headerShown: false, title: ""}} component={TopicDetailScreen} />
        <Stack.Screen name="Match" options={{headerShown: true, title: ""}} component={MatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

