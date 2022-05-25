import * as S from './styles';
import Image from 'next/image';
import { AiFillMessage, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { content } from 'src/utils/contents';

export const About = () => {
  const text = content('about');
  return (
    <S.Container id='sobre'>
      <div className='wrapper'>
        <div className='bg-perfil'>
          <Image
            src={'/imgs/perfil.jpg'}
            alt='Logotipo com as letras AC Dev'
            className='perfil'
            width={3000}
            height={3000}
          />
        </div>
        <div className='content'>
          <h2> <AiFillMessage /> Sobre</h2>
          <p>{text}</p>
          <div className='buttons'>
            <a href="https://www.linkedin.com/in/andersoncardoso-dev/" className='button-link'><AiFillLinkedin />LinkedIn</a>
            <a href="https://github.com/AndeCardoso" className='button-link'><AiFillGithub />Github</a>
          </div>
        </div>
      </div>
    </S.Container>
  );
};
