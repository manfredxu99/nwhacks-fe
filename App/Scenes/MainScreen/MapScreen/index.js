import React from 'react'
import { View } from 'react-native'
import StyleSheet from 'App/Themes/StyleSheet'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const styles = StyleSheet.create({})

const API_KEY = 'AIzaSyABlr-bkdikJ3ErSH7ibWD1nY0xePUaA4Y'

const MapScreen = () => {
  return (
    <View style={styles.flex1}>
      <MapView
        style={styles.flex1}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 49.238866,
          longitude: -123.050542,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default MapScreen
