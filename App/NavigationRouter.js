import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from 'App/Scenes/LoginScreen'
import SignupScreen from 'App/Scenes/SignupScreen'
//Main Screen
import MapScreen from 'App/Scenes/MainScreen/MapScreen'
import ReportScreen from 'App/Scenes/MainScreen/ReportScreen'
import ProfileScreen from 'App/Scenes/MainScreen/ProfileScreen'
import { Image, Text } from 'react-native'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        showIcon: true,
        tabBarIcon: ({ focused, size }) => {
          let icon
          if (route.name === 'Map') {
            icon = focused
              ? require('./assets/map-selected.jpg')
              : require('./assets/map-unselected.jpg')
          } else if (route.name === 'Report') {
            icon = focused
              ? require('./assets/report-selected.jpg')
              : require('./assets/report-unselected.jpg')
          } else {
            icon = focused
              ? require('./assets/profile-selected.jpg')
              : require('./assets/profile-unselected.jpg')
          }
          return <Image style={{ width: size, height: size }} source={icon} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#7A7A7A',
        inactiveTintColor: '#B9ACAC',
      }}>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const NavigationRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRouter
