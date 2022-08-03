import { TabNavigator } from '@/navigations/TabNavigator'
import { Login } from '@/screens/public/Login'
import { useSelector } from 'react-redux'
import { initialState } from '@/redux/reducers/user'

export const EntryPoint = () => {

  const user = useSelector((state) => state.user) 

  return (
    <>
      { user!==initialState ? <TabNavigator /> : <Login />}
    </>
  )
}