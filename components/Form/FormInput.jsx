import { StyleSheet, TextInput } from 'react-native'
import { Controller, useFormContext } from 'react-hook-form'

export const FormInput = ({ placeholder, name, secure=false }) => {

	const { control } =  useFormContext()

	return (
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value }}) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder={placeholder}
						secureTextEntry={secure}
					/>
				)}
				name={name}
			/>
	)
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		width: 250,
		backgroundColor: '#dadce7',
		color: 'black',
		padding: 10,
		margin: 5,
		borderWidth: 1,
		borderRadius: 5
	},
})
