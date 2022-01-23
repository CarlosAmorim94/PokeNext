import styled from "styled-components";


export const TitleStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  h1 {
    color: var(--red-500);
    text-align: center;
    font-size: 3em;
    margin-right: 0.4em;

    span {
      color: var(--black);
    }
  }
`
export const PokemonsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

`