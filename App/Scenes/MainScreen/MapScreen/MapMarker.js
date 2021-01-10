import React from 'react'
import { Marker } from 'react-native-maps'
import { View } from 'react-native'
import Text from 'App/Components/Text'

function getPinColor(riskLevel) {
  if (riskLevel >= 10) {
    return 'red'
  }
  if (riskLevel >= 5) {
    return 'orange'
  }
  if (riskLevel >= 2) {
    return 'yellow'
  }
  return 'green'
}

const MapMarker = ({ riskLevel, ...props }) => {
  return <Marker {...props} pinColor={getPinColor(riskLevel)}></Marker>
}

export default MapMarker
