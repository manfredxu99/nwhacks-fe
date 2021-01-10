import React from 'react'
import { Callout, Marker } from 'react-native-maps'
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

function getText(riskLevel) {
  if (riskLevel >= 10) {
    return 'Exercise high caution'
  }
  if (riskLevel >= 5) {
    return 'Exercise moderate to high caution'
  }
  if (riskLevel >= 2) {
    return 'Exercise moderate caution'
  }
  return 'This area is safe'
}

const MapMarker = ({ riskLevel, confirmed, title, ...props }) => {
  const color = getPinColor(riskLevel)
  return (
    <Marker title="dickhead" {...props} pinColor={color}>
      <Callout>
        <View style={{ borderRadius: 10 }}>
          <Text>{title}</Text>
          <Text>Confirmed: {confirmed}</Text>
          <Text>In contact: {riskLevel}</Text>
          <Text style={{ color }}>{getText(riskLevel)}</Text>
        </View>
      </Callout>
    </Marker>
  )
}

export default MapMarker
