import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { SiNextdotjs } from 'react-icons/si';

import {
  About,
  Contact,
  HardSkills,
  Navbar,
  Projects
} from '@components/index';

import * as S from '../styles/pages/Home';

const Home: NextPage = () => {
  const currentDate = new Date();
  const [year] = useState<number>(currentDate.getFullYear());

  return (
    <S.Container>
      <Head>
        <title>Anderson Cardoso | JS Dev</title>
      </Head>
      <Navbar />
      <S.Header>
        <div className='wrapper'>
          <div>
            <h3>Salve!</h3>
            <span>Meu nome é <a href="https://www.linkedin.com/in/andersoncardoso-dev/" target="_blank" rel="noreferrer"><b>Anderson Cardoso</b></a>,</span>
            <p>sou desenvolvedor FullStack JavaScript.</p>
          </div>
          <img
            src={'/svgs/logo-big.svg'}
            alt='Logotipo com as letras AC Dev'
            className='logo'
          />
        </div>
      </S.Header>
      <S.Main>
        <About />
        <HardSkills />
        <Projects />
        <Contact />
      </S.Main>
      <S.Footer>
        <button onClick={() => window.scrollTo(0, 0)}>
          <img
            src={'/svgs/logo-small.svg'}
            alt='Logotipo com as letras AC Dev'
            className='logo'
          />
        </button>
        <div className='wrapper'>
          <span>Copyright © {year}</span>
          <p>Todos os direitos reservados.</p>
          <span className='made-by'>
            <p>Desenvolvido por</p>
            <a href="https://www.linkedin.com/in/andersoncardoso-dev/" target="_blank" rel="noreferrer" className='name'> Anderson Cardoso </a>
            <p>utilizando <a href="https://nextjs.org//" target="_blank" rel="noreferrer">Next JS<SiNextdotjs size="15px" /></a></p>
          </span>
        </div>
      </S.Footer>
    </S.Container>
  );
};

export default Home;
