import React from 'react'
import { View, TextInput, Button } from 'react-native'
import StyleSheet from 'App/Themes/StyleSheet'
import Text from 'App/Components/Text'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
})

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const onSignUp = () => {}

  const valid = firstName && lastName && email && password && password === confirmPassword

  return (
    <View style={[styles.flex1, styles.screenPadding]}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
        autoCompleteType="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        textContentType="password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        textContentType="password"
        secureTextEntry
      />
      <View style={{ marginBottom: 10 }}>
        <Button title="Sign Up" disabled={!valid} onPress={onSignUp} />
      </View>
    </View>
  )
}

export default SignupScreen
