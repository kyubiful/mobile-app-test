import { Text, View, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

export const Login = () => {
	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = data => Alert.alert('Msg', JSON.stringify(data))

	return (
		<View style={styles.view}>
			<Text style={styles.title}>Login</Text>
			<View style={styles.form}>
			<Controller
				control={control}
				rules={{
					required: true
				}}
				render={({ field: { onChange, onBlur, value }}) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Email'
					/>
				)}
				name='email'
			/>
				{errors.email ? <Text style={styles.error}>Email is required.</Text> : <Text style={styles.error}></Text>}

			<Controller
				control={control}
				rules={{
					required: true
				}}
				render={({ field: { onChange, onBlur, value }}) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder='Password'
						secureTextEntry={true}
					/>
				)}
				name='password'
			/>
		{errors.password ? <Text style={styles.error}>Password is required.</Text> : <Text style={styles.error}></Text>}

			<TouchableOpacity style={styles.button} title='Submit' onPress={handleSubmit(onSubmit)} >
				<Text style={styles.buttonText}>Submit</Text>
			</TouchableOpacity>
			</View>
		</View>
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
	},
	view: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	form: {
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 20
	},
	error: {
		height: 20,
		color: 'red'
	}
})
