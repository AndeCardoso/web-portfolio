import { IoLogoNodejs, IoRocket } from 'react-icons/io5';
import { FiLink } from 'react-icons/fi';
import { DiHtml5, DiCss3, DiReact, DiGitBranch } from 'react-icons/di';
import { SiStyledcomponents } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { MdHttp } from 'react-icons/md';

import * as S from './styles';

export const Projects = () => {
  return (
    <S.Container id='projetos'>
      <div className='wrapper'>
        <h2><IoRocket />Projetos</h2>
        <div className='projects-group'>
          <div className='project-main'>
            <h3>Hotel Kolman</h3>
            <p>Site de hotel com sistema de gerenciamento de conteúdo em React Js (SRGC), desenvolvido por mim.</p>
            <a
              href="https://hotelkolman.com/"
              target='_blank'
              className='button-link'
              rel="noreferrer"
            ><FiLink />Website</a>
            <div className='icons'>
              <DiReact />
              <DiHtml5 />
              <SiStyledcomponents />
              <IoLogoJavascript />
              <MdHttp />
              <IoLogoNodejs />
            </div>
          </div>
          <div className='projects-list'>
            <div className='project'>
              <h3>Agenda FCamara</h3>
              <p>Agenda para trabalho presencial nos escritórios da empresa, feito no hackathon de 02/2021.</p>
              <a href="https://github.com/AndeCardoso/fcamara-agenda" target='_blank' className='button-link' rel="noreferrer"><DiGitBranch />Repositório</a>
              <div className='icons'>
                <DiReact />
                <DiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
                <MdHttp /> 
              </div>
            </div>
            <div className='project'>
              <h3>Buscador Github</h3>
              <p>Buscador de perfis e seus repositórios no Github.</p>
              <a href="https://github-seek-profile-andecardoso.vercel.app/" target='_blank' className='button-link' rel="noreferrer"><FiLink />Website</a>
              <div className='icons'>
                <DiReact />
                <DiHtml5 />
                <SiStyledcomponents />
                <IoLogoJavascript />
                <MdHttp /> 
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/AndeCardoso?tab=repositories" target='_blank' rel="noreferrer" className='more-projects'>Conheça todos os projetos!</a>
      </div>
    </S.Container>
  );
};
