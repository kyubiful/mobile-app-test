import { StatusBar } from 'expo-status-bar'
import { TabNavigator } from '@/navigations/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Login } from '@/screens/public/Login'
import { useState } from 'react'

export default function App() {
  const [ user, setUser ] = useState()

  return (
      <NavigationContainer>
        { user ? <TabNavigator /> : <Login setUser={setUser} />}
        <StatusBar style="auto" />
      </NavigationContainer>
  )
}