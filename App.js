import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { EntryPoint } from '@/screens/public/EntryPoint'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <EntryPoint /> 
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  )
}