import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@/screens/private/Home'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={Home} />
		</Tab.Navigator>	
	)
}
