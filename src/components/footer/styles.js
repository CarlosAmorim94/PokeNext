import styled from "styled-components";

export const ContainerStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-600);
  height: 150px;
  color: var(--white);
  margin-top: 2em;
  border-top: 3px solid #111;

  span {
  font-weight: bold;
  }

  p {
    margin: .5vh;
  }
  
`