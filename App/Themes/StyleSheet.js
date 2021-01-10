import { Platform, StyleSheet } from 'react-native'
import ApplicationStyles from './ApplicationStyles'

const create = (styles, includeApplicationStyles = true) => {
  const output = {}

  if (includeApplicationStyles) {
    Object.assign(output, ApplicationStyles)
  }

  for (const key of Object.keys(styles)) {
    const { ios, android, ...common } = styles[key]
    const platformStyle = Platform.select({ ios, android }) || {}
    output[key] = {
      ...common,
      ...platformStyle,
    }
  }

  return StyleSheet.create(output)
}

export default {
  create,
}
