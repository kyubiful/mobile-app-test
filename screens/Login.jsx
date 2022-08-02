import { Text, View, Alert, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'
import { FormInput, FormInputError, FormContainer, FormButton, regex } from '../components/Form'
import { useEffect, useState } from 'react'

export const Login = () => {

	const [user, setUser] = useState()

	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = data => {

		fetch('http://192.168.1.155:3000/api/login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				Alert.alert('Msg', JSON.stringify(data))
			})
			.catch(err => console.log(err))

	}

	return (
		<View style={styles.view}>
			<Text style={styles.title}>Login</Text>
			<FormContainer>
				<FormInput control={control} placeholder="Email" name="email" pattern={regex.email} />
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
