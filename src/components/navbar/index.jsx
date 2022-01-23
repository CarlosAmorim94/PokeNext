import Link from 'next/link';
import Image from 'next/image';
import { ContainerStyled, ListStyled, LogoStyled } from './styles';

export default function Navbar() {
  return (
    <ContainerStyled>
    
      <LogoStyled>
        <Image 
          src='/images/pokeball.png'
          width='30'
          height='30'
          alt='PokeNext'
          />
        <h1>PokeNext</h1>
      </LogoStyled>

      <ListStyled>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre</a></Link>
        </li>
      </ListStyled>
    
    </ContainerStyled>
  );
}
