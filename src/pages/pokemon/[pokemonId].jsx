import { 
  ContainerStyled,
  PokemonTitleStyled,
  TypesContainerStyled,
  DataContainerStyled,
  MovesStyled,


 } from "../../styles/pokemonStyles"

import Image from "next/image"

//get StaticPaths para carregar os dados da API, "Carregar geral, todos... depois o individual na getStaticProps"
export const getStaticPaths = async () => {
  const maxPokemons = 151
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const resp = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await resp.json()

  //params, precisamos do ID do pokemon, por isso vamos criar o index, index + 1 pois os pokemons não começam do 0.
  const paths = data.results.map((pokemon, index)=>{
    return {
      params: { pokemonId: (index + 1).toString()}
    }
  })
  
  return {
    paths,
    fallback: false,
  }
}


export const getStaticProps = async ( context ) => {
  const id = context.params.pokemonId

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await resp.json()

  return {
    props: { pokemon: data }
  }

}


export default function Pokemon( { pokemon } ) {

  return (
    <ContainerStyled>

        <PokemonTitleStyled>
          {pokemon.name}
        </PokemonTitleStyled>

        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          width="200"
          height="200"
          alt={pokemon.name}
        />

      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>

      <div>

        <h3>Tipo:</h3>

        <TypesContainerStyled>
          {pokemon.types.map((item, index) => (
            <span
            key={index}
            // primeiro className é "type" geral para a div, o segundo é retornada da api para criar a classe que troca a cor da div 
            className={`
              type ${item.type.name}
            `}
            >
              {item.type.name}
            </span>
          ))}

        </TypesContainerStyled>

      </div>

      <DataContainerStyled>

        <div>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>

        <div className="data_height">
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>

      </DataContainerStyled>

        

        <MovesStyled>

        <h3>Golpes:</h3>
        <ul>
          {pokemon.moves.map((item, index) =>(
            <li key={index}>{item.move.name}</li>
          ))}
        </ul>
        </MovesStyled>
    
    </ContainerStyled>
  )
}