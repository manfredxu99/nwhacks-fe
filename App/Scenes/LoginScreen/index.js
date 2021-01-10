import React from 'react'
import { View, TextInput } from 'react-native'
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const onSignUp = () => {
    navigation.navigate('Signup')
  }
  return (
    <View style={[styles.flex1, styles.screenPadding]}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        textContentType="password"
      />
      <Text>
        Don't have an account? <Text onPress={onSignUp}>Sign Up</Text>
      </Text>
    </View>
  )
}

export default LoginScreen
