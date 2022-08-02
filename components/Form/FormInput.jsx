import { StyleSheet, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'

export const FormInput = ({ control, placeholder, name, secure=false, pattern=""}) => {

	return (
			<Controller
				control={control}
				rules={{
					required: {
						value: true,
						message: 'Field is required'
					},
					pattern: {
						value: pattern,
						message: 'It`s not a valid email'
					}
				}}
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
