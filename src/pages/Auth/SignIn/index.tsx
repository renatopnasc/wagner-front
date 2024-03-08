import { NavLink } from 'react-router-dom'
import {
  RegisterContainer,
  SignInButton,
  SignInForm,
  SignInFormContainer,
  SignInInputContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInFormDataType = z.infer<typeof signInFormSchema>

export function SignIn() {
  document.title = 'vxtrxne - Entre na sua conta'

  const { register, handleSubmit, watch, reset } = useForm<SignInFormDataType>({
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSubmitSignInForm(data: SignInFormDataType) {
    console.log(data)
    reset()
  }

  const email = watch('email')
  const password = watch('password')

  const isDisabled = !email || !password

  return (
    <SignInFormContainer>
      <h2>Acessar conta</h2>

      <SignInForm onSubmit={handleSubmit(handleSubmitSignInForm)} action="">
        <SignInInputContainer>
          <label htmlFor="emailInput">email</label>
          <input
            type="email"
            id="emailInput"
            placeholder="Ex.: name@email.com"
            {...register('email')}
          />
        </SignInInputContainer>

        <SignInInputContainer>
          <label htmlFor="passwordInput">password</label>
          <input
            type="password"
            id="passwordInput"
            placeholder="Ex.: 1234"
            {...register('password')}
          />
        </SignInInputContainer>

        <SignInButton disabled={isDisabled} type="submit" title="Entrar">
          Entrar
        </SignInButton>
      </SignInForm>

      <RegisterContainer>
        <p>
          Ainda não possui uma conta?{' '}
          <span>
            <NavLink to="/register">sign up</NavLink>
          </span>
        </p>
      </RegisterContainer>
    </SignInFormContainer>
  )
}
