import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import StyleSheet from 'App/Themes/StyleSheet'
import Text from 'App/Components/Text'
import { TextInput } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  button: {
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 24,
  },
  submitBtn: {
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80B578',
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  verificationCodeInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    alignSelf: 'stretch',
    marginVertical: 16,
    borderRadius: 8,
  },
})

const ReportScreen = () => {
  const [showVerificationCode, setShowVerificationCode] = React.useState(false)
  const [verificationCode, setVerificationCode] = React.useState('')
  const iHaveCovid = () => {
    setShowVerificationCode(true)
  }
  const onDirectContact = () => {}

  return (
    <View style={[styles.flex1, styles.screenPadding]}>
      <Text style={[styles.centerText, { fontSize: 28, fontWeight: '900', color: 'black' }]}>
        Report Your Status
      </Text>
      {showVerificationCode ? (
        <View
          style={{
            marginVertical: 20,
            borderWidth: 1,
            borederColor: 'black',
            padding: 32,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20 }}>What is your verification code?</Text>
          <TextInput
            style={styles.verificationCodeInput}
            value={verificationCode}
            onChangeText={(text) => setVerificationCode(text)}
          />
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={{ color: 'white', fontSize: 20 }}>Submit Key</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
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
        </>
      )}
    </View>
  )
}

export default ReportScreen
