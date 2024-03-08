import { NavLink } from 'react-router-dom'
import {
  PasswordContainer,
  RegisterContainer,
  SignUpButton,
  SignUpForm,
  SignUpFormContainer,
  SignUpInputContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signUpFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
})

type SignUpFormDataType = z.infer<typeof signUpFormSchema>

export function SignUp() {
  document.title = 'vxtrxne - Crie sua conta'

  const { register, handleSubmit, watch, reset } = useForm<SignUpFormDataType>({
    resolver: zodResolver(signUpFormSchema),
  })

  async function handleSubmitSignUpForm(data: SignUpFormDataType) {
    console.log(data)

    reset()
  }

  const fullName = watch('fullName')
  const email = watch('email')
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const isDisabled = !fullName || !email || !password || !confirmPassword

  return (
    <SignUpFormContainer>
      <h2>Criar conta</h2>

      <SignUpForm onSubmit={handleSubmit(handleSubmitSignUpForm)} action="">
        <SignUpInputContainer>
          <label htmlFor="nameInput">name</label>
          <input
            type="text"
            id="nameInput"
            placeholder="Ex.: John Doe"
            {...register('fullName')}
          />
        </SignUpInputContainer>

        <SignUpInputContainer>
          <label htmlFor="emailInput">email</label>
          <input
            type="email"
            id="emailInput"
            placeholder="Ex.: email@dominio.com"
            {...register('email')}
          />
        </SignUpInputContainer>

        <PasswordContainer>
          <SignUpInputContainer>
            <label htmlFor="passwordInput">password</label>
            <input
              type="password"
              id="passwordInput"
              placeholder="Ex.: 1234"
              {...register('password')}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <label htmlFor="confirmPasswordInput">confirm password</label>
            <input
              type="password"
              id="confirmPasswordInput"
              placeholder="Ex.: 1234"
              {...register('confirmPassword')}
            />
          </SignUpInputContainer>
        </PasswordContainer>

        <SignUpButton disabled={isDisabled} type="submit" title="Entrar">
          Cadastrar
        </SignUpButton>
      </SignUpForm>

      <RegisterContainer>
        <p>
          Já possui uma conta?{' '}
          <span>
            <NavLink to="/">sign in</NavLink>
          </span>
        </p>
      </RegisterContainer>
    </SignUpFormContainer>
  )
}
