import { useState } from 'react';

import { Menu } from 'src/shared/Menu';
import { Burguer } from 'src/shared/Burguer';

import { Container } from './styles';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className='wrapper'>
        <button onClick={() => window.scrollTo(0, 0)}>
          <a href="#">
            <img
              src={'/svgs/logo-small.svg'}
              alt='Logotipo com as letras AC Dev'
              className='logo'
            />
          </a>
        </button>
        <div>
          <Burguer open={open} setOpen={setOpen} />
          <Menu open={open}/>
        </div>
        <div className='menu'>
          <a href='#'
            onClick={() => window.scrollTo(0, 0)}>INÍCIO</a>
          <a href='#sobre'>SOBRE</a>
          <a href='#skills'>SKILLS</a>
          <a href='#projetos'>PROJETOS</a>
          <a href='#contato'>CONTATO</a>
        </div>
      </div>
    </Container>
  );
};
