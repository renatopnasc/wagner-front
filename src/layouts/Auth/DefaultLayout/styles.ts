import styled from 'styled-components'

export const AuthMainContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    210deg,
    ${(props) => props.theme.GRAY_800} 0%,
    ${(props) => props.theme.GRAY_950} 35%
  );

  /* margin-top: -5rem; */
`

export const AuthContent = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: fit-content;
  margin: 0 auto;

  & h1 {
    font-size: 3rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.GRAY_200};
    letter-spacing: 4px;
  }
`
