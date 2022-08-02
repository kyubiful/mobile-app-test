import { Text, StyleSheet } from 'react-native'

export const FormInputError = ({error}) => {
	return (
		<>
			{error ? <Text style={styles.error}>{error.message}</Text> : <Text style={styles.error}></Text>}
		</>
	)
}

const styles = StyleSheet.create({
	error: {
		height: 20,
		color: 'red'
	}
})
