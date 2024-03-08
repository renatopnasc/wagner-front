import styled from 'styled-components'

export const SignInFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background: ${(props) => props.theme.GRAY_900};
  border: 2px solid ${(props) => props.theme.GRAY_800};
  border-radius: 6px;
  padding: 3rem 4rem;

  > h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.GRAY_100};
  }
`

export const SignInForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SignInInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  flex: 1;

  > label {
    color: ${(props) => props.theme.GRAY_200};
    font-size: 0.75rem;
    width: fit-content;
  }

  > input {
    background: ${(props) => props.theme.GRAY_100};
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1rem;

    color: ${(props) => props.theme.BLACK};

    transition: all 200ms;

    &:focus {
      background: ${(props) => props.theme.WHITE};
      border: 2px solid ${(props) => props.theme.PURPLE_300};
    }
  }
`

export const SignInButton = styled.button`
  background: ${(props) => props.theme.PURPLE_500};
  border: 0;
  padding: 1rem;
  border-radius: 6px;

  margin-top: 2rem;
  cursor: pointer;

  color: ${(props) => props.theme.GRAY_100};
  font-size: 0.875rem;
  font-weight: bold;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.PURPLE_300};

    transition: all 300ms;
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }
`

export const RegisterContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.GRAY_700};

  > p {
    color: ${(props) => props.theme.GRAY_400};
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    font-weight: 600;

    span a {
      color: ${(props) => props.theme.PURPLE_500};
      text-decoration: none;

      transition: all 300ms;

      &:hover {
        color: ${(props) => props.theme.PURPLE_300};
      }
    }
  }
`
