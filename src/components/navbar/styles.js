import styled from "styled-components";

export const ContainerStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
  margin-bottom: 2em;
  background-color: var(--gray-600);
  color: var(--white);
`

export const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-left: 0.5em;
  }
`

export const ListStyled = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-right: 1.3em;

    a {
      color: var(--white);
      text-decoration: none;
      padding: 5px;
      transition: 0.4s;
      border-bottom: 2px solid transparent;

      &:hover {
        border-color: var(--white);
      }
    }
  }
`