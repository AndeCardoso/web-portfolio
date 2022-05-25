import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all ease-in-out 0.5s;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 30px;
    height: 3px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 5px;
    position: relative;
    transform-origin: 0;
    transition: all ease-in-out 0.5s;
  }

  div:nth-child(1){
    transform: ${({ slot }) => slot == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
  }

  div:nth-child(2) {
    opacity: ${({ slot }) => slot == 'true' ? '0' : '1'};
    transform: ${({ slot }) => slot == 'true' ? 'translateX(-20px)' : 'translateX(0)'};
  }

  div:nth-child(3) {
    transform: ${({ slot }) => slot == 'true' ? 'rotate(-45deg)' : 'rotate(0)'};
  }

  @media screen and (min-width: 725px) {
    display: none;
  }
`;
