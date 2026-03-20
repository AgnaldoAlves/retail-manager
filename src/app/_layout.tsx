import { Stack } from 'expo-router'
import { makeServer } from '../mocks/server'

if (__DEV__) {
  makeServer()
}

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />
}
