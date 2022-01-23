import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
  margin-bottom: 2em;
  width: 23%;
  border-radius: 1em;
  border: 2px solid var(--red-500);
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: var(--gray-600);
  color: var(--white);


  p {
    margin: 1em 0;
    background-color: var(--red-500);
    border-radius: 5px;
    padding: 5px;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size: 1.4em;
  }

  a {
    text-decoration: none;
    background-color: var(--white);
    color: var(--black);
    padding: 0.7em 1.2em;
    border-radius: 5px;
    font-weight: bold;
    transition: all ease 0.4s;

    &:hover {
      background-color: var(--red-500);
      color: var(--white);
    }
  }

`