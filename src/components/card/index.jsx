import { PokemonsStyled } from "../../styles/homeStyles";
import Image from "next/image";

export default function Card( { pokemon } ) {
  return (
    <>

      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
    
      {pokemon.name}
    
    </>
  )
}