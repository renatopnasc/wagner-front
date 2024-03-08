import { NavLink } from 'react-router-dom'
import {
  AuthButtonLogin,
  AuthButtonSignIn,
  AuthContainer,
  HeaderContent,
  HeaderContentFooter,
  HeaderCotainer,
  HeaderFooterNav,
  SearchProductContainer,
  SearchProductInput,
} from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function Header() {
  return (
    <HeaderCotainer>
      <HeaderContent>
        <h1>
          <NavLink to="/">vxtrxne</NavLink>
        </h1>

        <SearchProductContainer>
          <SearchProductInput type="text" placeholder="Busque por um produto" />
          <button type="submit" title="Buscar Produto">
            <MagnifyingGlass size={20} />
          </button>
        </SearchProductContainer>

        <AuthContainer>
          <AuthButtonLogin to="/login" title="Fazer Login">
            entrar
          </AuthButtonLogin>
          <AuthButtonSignIn to="/register" title="Crie uma conta">
            criar conta
          </AuthButtonSignIn>
        </AuthContainer>
      </HeaderContent>
      <HeaderContentFooter>
        <HeaderFooterNav>
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/products">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/offers">Ofertas</NavLink>
          </li>
        </HeaderFooterNav>
      </HeaderContentFooter>
    </HeaderCotainer>
  )
}
