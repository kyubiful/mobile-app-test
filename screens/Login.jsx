import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { useForm } from 'react-hook-form'
import { FormInput, FormInputError, FormContainer, FormButton } from '../components/Form'

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
			<FormContainer>
				<FormInput control={control} placeholder="Email" name="email" />
				<FormInputError error={errors.email} message="Email is required." />	

				<FormInput control={control} secure={true} placeholder="Password" name="password" />
				<FormInputError error={errors.password} message="Password is required." />	

				<FormButton title="Submit" onPress={handleSubmit(onSubmit)} />
			</FormContainer>
		</View>
	)
}

const styles = StyleSheet.create({
	
	view: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 20
	}
})
