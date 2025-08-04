import { CHECKING, UNAUTHENTICATED } from '@/constants/AuthStatuses'
import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import { Redirect, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

const CheckAuthenticationLayout = () => {
    const { status, checkStatus } = useAuthStore()

    useEffect(() => {
        checkStatus()
    }, [])

    if (status === CHECKING) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    if (status === UNAUTHENTICATED) { 
        return (
            <Redirect href="/auth/login" />
        )
    }
    return (
        <Stack>
            <Stack.Screen name="(home)/index" options={{ headerShown: false }} />
        </Stack>
    )

}

export default CheckAuthenticationLayout