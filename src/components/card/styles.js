import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  width: 23%;
  border-radius: 1rem;
  border: 2px solid var(--red-500);
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: var(--gray-600);
  color: var(--white);


  p {
    margin: 1rem 0;
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
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  a {
    text-decoration: none;
    background-color: var(--white);
    color: var(--black);
    padding: 0.7rem 1.2rem;
    border-radius: 5px;
    font-weight: bold;
    transition: all ease 0.4s;

    &:hover {
      background-color: var(--red-500);
      color: var(--white);
    }
  }

  @media (max-width: 770px) {
    width: 30%;

    h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 400px) {
    width: 45%;

    h3 {
      font-size: 1rem;
    }
  }

`