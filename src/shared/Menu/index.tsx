import { Container } from './styles';

interface IProps {
  open?: boolean;
}

export const Menu = ({ open }: IProps) => {
  return (
    <Container style={{transform: open ? 'translateX(0)' : 'translateX(+100%)'}}>
      <a href='#'
        onClick={() => window.scrollTo(0, 0)}>
        <span aria-label="home">
          INÍCIO
        </span>
      </a>
      <a href="#sobre">
        <span aria-label="about">
          SOBRE
        </span>
      </a>
      <a href="#skills">
        <span aria-label="skills">
          SKILLS
        </span>
      </a>
      <a href="#projetos">
        <span aria-label="projects">
          PROJETOS
        </span>
      </a>
      <a href="#contato">
        <span aria-label="contact">
          CONTATO
        </span>
      </a>
      <a href='/pdf/AndersonCardoso-Curriculo.pdf' target='_blank' rel='noreferrer'>
        CURRÍCULO
      </a>
    </Container>
  );
};
