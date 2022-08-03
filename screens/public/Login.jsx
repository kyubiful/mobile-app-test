import { Text, StyleSheet } from 'react-native'
import { useForm, FormProvider } from 'react-hook-form'
import { FormInput, FormInputError, FormContainer, FormButton } from '@/components/Form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ScreenContainer } from '@/components/Screen/ScreenContainer.jsx'
import { login } from '@/redux/reducers/user'
import { useDispatch } from 'react-redux'

let loginSchema = object().shape({
	email: string().required().email(),
	password: string().min(8).required()
})

export const Login = () => {

	const dispatch = useDispatch()

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
				console.log(data)
				dispatch(login(data))
			})
			.catch(err => console.log(err))

	}

	return (
		<ScreenContainer>
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
		</ScreenContainer>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20
	}
})
