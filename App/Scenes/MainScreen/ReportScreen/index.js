import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import StyleSheet from 'App/Themes/StyleSheet'
import Text from 'App/Components/Text'

const styles = StyleSheet.create({
  button: {
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 24,
  },
})

const ReportScreen = () => {
  const [showVerificationCode, setShowVerificationCode] = React.useState(false)
  const iHaveCovid = () => {}
  const onDirectContact = () => {}

  return (
    <View style={[styles.flex1, styles.screenPadding]}>
      <Text style={[styles.centerText, { fontSize: 28, fontWeight: '900', color: 'black' }]}>
        Report Your Status
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF9A9A' }]}
        onPress={iHaveCovid}>
        <Text>I have COVID</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#F9A96F' }]}
        onPress={onDirectContact}>
        <Text>I was in direct contact with someone who has COVID</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ReportScreen
