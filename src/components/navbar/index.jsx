import Link from 'next/link';
import Image from 'next/image';
import { ContainerStyle, ListStyle, LogoStyle } from './styles';

export default function Navbar() {
  return (
    <ContainerStyle>
    
      <LogoStyle>
        <Image 
          src='/images/pokeball.png'
          width='30'
          height='30'
          alt='PokeNext'
          />
        <h1>PokeNext</h1>
      </LogoStyle>

      <ListStyle>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre</a></Link>
        </li>
      </ListStyle>
    
    </ContainerStyle>
  );
}
