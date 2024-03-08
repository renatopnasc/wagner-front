import { Outlet } from 'react-router-dom'
import { AuthContent, AuthMainContainer, TitleContainer } from './styles'

export function DefaultLayout() {
  return (
    <AuthMainContainer>
      <AuthContent>
        <TitleContainer>
          <h1>vxtrxne</h1>
        </TitleContainer>

        <Outlet />
      </AuthContent>
    </AuthMainContainer>
  )
}
