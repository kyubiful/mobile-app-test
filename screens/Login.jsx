import { Text, View, Alert, StyleSheet } from 'react-native'
import { useForm, FormProvider } from 'react-hook-form'
import { FormInput, FormInputError, FormContainer, FormButton } from '../components/Form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

let loginSchema = object().shape({
	email: string().required().email(),
	password: string().min(8).required()
})

export const Login = () => {

	const form = useForm({ resolver: yupResolver(loginSchema)})

	const { control, handleSubmit, formState: { errors } } = form

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
				Alert.alert('Msg', JSON.stringify(data))
			})
			.catch(err => console.log(err))

	}

	return (
		<View style={styles.view}>
			<Text style={styles.title}>Login</Text>
			<FormProvider {...form} >
				<FormContainer>
					<FormInput control={control} placeholder="Email" name="email" />
					<FormInputError error={errors.email}/>	

					<FormInput control={control} secure={true} placeholder="Password" name="password" />
					<FormInputError error={errors.password}/>	

					<FormButton title="Submit" onPress={handleSubmit(onSubmit)} />
				</FormContainer>
			</FormProvider>
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
