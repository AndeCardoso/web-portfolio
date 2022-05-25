import { Dispatch, SetStateAction } from 'react';
import { Container } from './styles';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Burguer = ({ open, setOpen}: IProps) => {
  return (
    <Container slot={open ? 'true' : 'false'} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Container>
  );
};
