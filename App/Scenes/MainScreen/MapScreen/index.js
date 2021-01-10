import React from 'react'
import { View } from 'react-native'
import StyleSheet from 'App/Themes/StyleSheet'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapMarker from './MapMarker'

const styles = StyleSheet.create({})

const API_KEY = 'AIzaSyABlr-bkdikJ3ErSH7ibWD1nY0xePUaA4Y'

const MOCK_MARKERS = [
  {
    title: `Wick's Cafe`,
    latitude: 49.20407073449304,
    longitude: -123.13492625258617,
    risk: 15,
    confirmed: 5,
  },
  {
    title: 'White Spot',
    latitude: 49.20477278183299,
    longitude: -123.1308799827935,
    risk: 12,
    confirmed: 7,
  },
  {
    title: `Cafe de l'Orangerie`,
    latitude: 49.20421333841166,
    longitude: -123.13502449032984,
    risk: 8,
    confirmed: 3,
  },
  {
    title: `McDonald's`,
    latitude: 49.20610357755158,
    longitude: -123.12544492516429,
    risk: 6,
    confirmed: 5,
  },
  {
    title: `St Augustine's Church`,
    latitude: 49.207239116082015,
    longitude: -123.13427475715626,
    risk: 5,
    confirmed: 5,
  },
  {
    title: `Chevron`,
    latitude: 49.210470351384565,
    longitude: -123.12972573083604,
    risk: 3,
    confirmed: 2,
  },
  {
    title: `Amway Distributor`,
    latitude: 49.20636158239532,
    longitude: -123.13194859762149,
    risk: 1,
    confirmed: 1,
  },
]

const MapScreen = () => {
  return (
    <View style={styles.flex1}>
      <MapView
        style={styles.flex1}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 49.20543709545455,
          longitude: -123.1313807302643,
          latitudeDelta: 0.018044,
          longitudeDelta: 0.000842,
        }}>
        {MOCK_MARKERS.map((marker, index) => (
          <MapMarker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            riskLevel={marker.risk}
            confirmed={marker.confirmed}
          />
        ))}
      </MapView>
    </View>
  )
}

export default MapScreen
