import React from 'react'
import { View, Image, TextInput, Button } from 'react-native'
import StyleSheet from 'App/Themes/StyleSheet'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    alignSelf: 'stretch',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
})

const PROFILE_PIC_URI =
  'https://scontent.fyvr5-1.fna.fbcdn.net/v/t1.15752-9/138265086_3439276426169906_6120664083236714894_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=jOQinVGVSdUAX8J0x-c&_nc_ht=scontent.fyvr5-1.fna&oh=ca8e8deffa1dd3714e71fd09e40b767a&oe=6020A87F'

const ProfileScreen = () => {
  return (
    <View style={[styles.flex1, styles.screenPadding]}>
      <View style={styles.alignCenter}>
        <View>
          <Image
            source={{ uri: PROFILE_PIC_URI }}
            style={{ height: 200, width: 200, borderRadius: 100 }}
          />
          <View
            style={{
              height: 50,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: 'white',
              borderRadius: 25,
            }}>
            <Image
              style={{ height: 30, width: 30, backgroundColor: 'transparent' }}
              source={{
                uri: 'https://i.pinimg.com/564x/9a/ec/b3/9aecb3eb47bd0ab6012e93aea49a3bc3.jpg',
              }}
            />
          </View>
        </View>
        <TextInput style={styles.input} placeholder="Name" value="Paul Lam" />
        <TextInput style={styles.input} placeholder="Address" value="1951 E 35th Avenue" />
        <TextInput style={styles.input} placeholder="Age" value="24" />
        <View style={{ marginTop: 20, alignSelf: 'stretch' }}>
          <Button title="Close Contacts: 3" style={{ alignSelf: 'stretch' }} />
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen
