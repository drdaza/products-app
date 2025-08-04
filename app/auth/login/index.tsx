import { ThemedText } from '@/presentation/theme/components/ThemedText'
import React from 'react'
import { View } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText
        type='title'
      >LoginScreen</ThemedText>
    </View>
  )
}

export default LoginScreen