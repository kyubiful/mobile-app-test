import { Text, StyleSheet } from 'react-native'

export const FormInputError = ({error, message}) => {
	return (
		<>
			{error ? <Text style={styles.error}>{message}</Text> : <Text style={styles.error}></Text>}
		</>
	)
}

const styles = StyleSheet.create({
	error: {
		height: 20,
		color: 'red'
	}
})