import { Tooltip } from '@shared/Tooltip';
import {
  RiWechatFill,
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiMailFill,
  RiGithubFill,
  RiDiscordFill
} from 'react-icons/ri';
import { Container } from './styles';

export const Contact = () => {
  return (
    <Container id='contato'>
      <div className='wrapper'>
        <h2><RiWechatFill />Contato</h2>
        <p>Caso queira entrar em contato comigo,<br/> pode me chamar por onde preferir.</p>
        <div className='links'>
          <a href="https://wa.me/55051997245468?text=Queria%20trocar%20uma%20ideia%20contigo!"
            target='_blank' rel='noreferrer'>
            <Tooltip item={<RiWhatsappFill />} text="Whatsapp" /></a>
          <a href="https://discordapp.com/users/723642481874567229"
            target='_blank' rel='noreferrer'>
            <Tooltip item={<RiDiscordFill />} text="Discord" /></a>
          <a href="https://github.com/AndeCardoso"
            target='_blank' rel='noreferrer'>
            <Tooltip item={<RiGithubFill />} text="Github" /></a>
          <a href="https://www.linkedin.com/in/andersoncardoso-dev/"
            target='_blank' rel='noreferrer'>
            <Tooltip item={<RiLinkedinBoxFill />} text="LinkedIn" /></a>
          <a href="https://www.instagram.com/andecardoso.dev/"
            target='_blank' rel='noreferrer'>
            <Tooltip item={<RiInstagramFill />} text="Instagram" /></a>
          <a href="mailto:andersoncardoso.dev@gmail.com?subject=Queria trocar uma ideia contigo!"
            target='_blank' rel='noreferrer'>
            <Tooltip item={<RiMailFill />} text="E-mail" /></a>
        </div>
      </div>
    </Container>
  );
};
