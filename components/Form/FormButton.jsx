import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const FormButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#7DA6E7',
		marginTop: 10,
		height: 40,
		width: 250,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	},
	buttonText: {
		fontSize: 16,
		color: 'white'
	}
})