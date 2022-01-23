import Image from "next/image"
import Card from "../components/card"
import pokeball from "../../public/images/pokeball.png"

import { PokemonsStyled, TitleStyled } from "../styles/homeStyles"

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
    <>
      
      <TitleStyled>

      <h1>Poke<span>Next</span></h1>

      <Image
      src={pokeball}
      width={50}
      height={50}
      alt="Pokeball" />

      </TitleStyled>



      <PokemonsStyled>
    
        {pokemons.map((pokemon) => ( //Recebemos os dados do objeto "pokemon" e passamos como props para o Card
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonsStyled>
      
    </>
  )
}

