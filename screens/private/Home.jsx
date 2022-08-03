import { Text, Button } from 'react-native'
import { ScreenContainer } from '@/components/Screen/ScreenContainer'

export const Home = () => {
	const handlePress = () => {
	}
	return (
		<ScreenContainer>
			<Text>Home Screen</Text>
			<Button onPress={handlePress} title='Log Out'/>
		</ScreenContainer>
	)
}