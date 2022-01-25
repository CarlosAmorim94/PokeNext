import styled from "styled-components";

export const ContainerStyled = styled.section`
  text-align: center;

  h3 {
    margin: 0.6em auto;
    font-size: 1.2em;
  }
`

export const PokemonTitleStyled = styled.div`
  font-size: 2.5em;
  text-transform: capitalize;
  background-color: var(--gray-600);
  color: var(--white);
  padding: 0.3em;
  margin: 0.8em auto;
  width: fit-content;
`

export const TypesContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .type {
    padding: 0.6em 1em;
    color: var(--white);
    background-color: #000;
    margin-right: 0.5em;
    border: 1px solid #ccc;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: 0.8em;
  }

  .normal {
    background-color: #aa9;
  }

  .fire {
    background-color: #f42;
  }

  .water {
    background-color: #39f;
  }

  .eletric {
    background-color: #fc3;
  }

  .grass {
    background-color: #7c5;
  }

  .ice {
    background-color: #6cf;
  }

  .fighting {
    background-color: #b54;
  }

  .poison {
    background-color: #a59;
  }

  .ground {
    background-color: #db5;
  }

  .flying {
    background-color: #89f;
  }

  .psychic {
    background-color: #f59;
  }

  .bug {
    background-color: #ab2;
  }

  .rock {
    background-color: #ba6;
  }

  .ghost {
    background-color: #66b;
  }

  .dragon {
    background-color: #76e;
  }

  .dark {
    background-color: #754;
  }

  .steel {
    background-color: #aab;
  }

  .fairy {
    background-color: #e9e;
  }
`

export const DataContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5em;


  div {
    margin: 1em 0;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .data_height {
      border-right: 1px solid #ccc;
    }
  }
 
`
export const MovesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: stretch;
    width: 80vw;
    height: auto;
    
    li {
      width: 15%;
      padding: 0.6em 1em;
      color: var(--white);
      background-color: #000;
      margin-right: 0.5em;
      border: 1px solid #ccc;
      border-radius: 6px;
      text-transform: uppercase;
      font-size: 0.8em;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    ul li {
      width: 30%;
    }
  }

`