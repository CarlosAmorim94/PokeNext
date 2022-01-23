import styled from "styled-components";

export const ContainerStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }

  p {
    margin-bottom: 1.5em;

    a {
      margin: 0 .5rem;
      text-decoration: underline;
      color: black;
      font-weight: bold;
    }
  }

`
export const ImageStyled = styled.div`
  width: 70vw;
  height: 30vh;
`