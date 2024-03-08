import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderCotainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.GRAY_950};
  border-bottom: 1px solid ${(props) => props.theme.GRAY_800};
`

export const HeaderContent = styled.div`
  max-width: 90rem;
  width: 100%;
  padding: 1rem 5.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  > h1 a {
    color: ${(props) => props.theme.GRAY_200};
    text-transform: uppercase;
    text-decoration: none;
  }
`

export const SearchProductContainer = styled.form`
  flex: 1;

  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.GRAY_800};
  border-radius: 6px;

  position: relative;

  transition: all 100ms;

  > button {
    position: absolute;
    right: 1rem;
    color: ${(props) => props.theme.GRAY_200};

    display: flex;
    cursor: pointer;

    background: none;
    border: none;

    &:hover {
      color: ${(props) => props.theme.GREEN_500};

      transition: all 100ms;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.GREEN_500};
    }
  }

  &:focus-within {
    box-shadow: 0 0px 0px 1px ${(props) => props.theme.GREEN_500};
    background: ${(props) => props.theme.GRAY_700};
  }
`

export const SearchProductInput = styled.input`
  width: 100%;

  background: transparent;
  border: 0;

  padding: 1rem;

  color: ${(props) => props.theme.GRAY_200};
  font-size: 0.875rem;
`

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const AuthButtonBase = styled(NavLink)`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  background: transparent;
  text-transform: lowercase;
  color: ${(props) => props.theme.GRAY_200};
  border: 1px solid ${(props) => props.theme.GRAY_500};
  text-decoration: none;

  cursor: pointer;
`

export const AuthButtonLogin = styled(AuthButtonBase)`
  &:hover {
    border: 1px solid ${(props) => props.theme.GREEN_500};
    transition: all 100ms;
  }
`

export const AuthButtonSignIn = styled(AuthButtonBase)`
  &:hover {
    border: 1px solid ${(props) => props.theme.PURPLE_300};
    transition: all 100ms;
  }
`

export const HeaderContentFooter = styled.div`
  width: 100%;
  background: ${(props) => props.theme.GRAY_900};
  border-top: 1px solid ${(props) => props.theme.GRAY_800};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderFooterNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  list-style: none;

  > li a {
    text-decoration: none;
    color: ${(props) => props.theme.GRAY_100};
    font-weight: 500;
    font-size: 0.875rem;

    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:hover {
      filter: brightness(0.9);
      border-bottom: 2px solid ${(props) => props.theme.GREEN_500};

      transition: all 100ms;
    }

    &.active {
      border-bottom: 2px solid ${(props) => props.theme.GREEN_500};
    }
  }
`
