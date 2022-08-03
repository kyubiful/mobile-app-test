import { Text, Button } from 'react-native'
import { ScreenContainer } from '@/components/Screen/ScreenContainer'
import { logout } from '@/redux/reducers/user'
import { useDispatch } from 'react-redux'

export const Home = () => {
	const dispatch = useDispatch()

	const handlePress = () => {
		dispatch(logout())
	}

	return (
		<ScreenContainer>
			<Text>Home Screen</Text>
			<Button onPress={handlePress} title='Log Out'/>
		</ScreenContainer>
	)
}