import { StyleSheet, View } from 'react-native'

export const FormContainer = ({ children }) => {
  return (
    <View style={styles.form}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
	form: {
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
})