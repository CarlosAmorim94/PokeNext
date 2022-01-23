import { ContainerStyled } from "../styles/homeStyles"

export async function getStaticProps() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const resp = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await resp.json()

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }

}

export default function Home( { pokemons } ) {
  return (
    <ContainerStyled>
      
      <h1>PokeNext</h1>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      
    </ContainerStyled>
  )
}

