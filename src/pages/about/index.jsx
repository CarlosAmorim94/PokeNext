import Image from "next/image"
import Link from "next/link"

import pokemons from "../../../public/images/pokemons.png"

import { ContainerStyled, ImageStyled } from "./styles"

export default function About() {

  return (
    <ContainerStyled>

      <h1>Sobre o projeto</h1>

      <p>
        Projeto criado com 💙  por 
          <Link 
          href="https://www.linkedin.com/in/carlosamorim94/" assHref={true}>
            <a>Carlos Amorim</a>
          </Link>
        Seguindo as aulas do 
          <Link
          href="https://www.youtube.com/playlist?list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft"
          passHref={true}
          ><a>Prof. Matheus Battisti do canal Hora de codar</a>
          </Link>
          
        </p>

      <ImageStyled>
        <Image 
        src={pokemons}
        width={70}
        height={30}
        layout="responsive"
        alt="Pokemons"
        />
      </ImageStyled>
    
    </ContainerStyled>
  )
}