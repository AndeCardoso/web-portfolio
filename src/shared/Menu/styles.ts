import styled from 'styled-components';

export const Container = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.colors.menu};
  backdrop-filter: blur(5px);
  text-align: right;
  padding: 50px;
  padding-top: 20px;
  position: fixed;
  top: 90px;
  right: 0;
  transition: all ease-in-out 0.6s;
  z-index: -15;

  a {
    font-size: 1.8rem;
    text-transform: uppercase;
    padding: 30px 0;
    font-weight: bold;
    text-decoration: none;
    transition: all ease-in-out 0.5s;

    :hover {
      text-shadow: 0 0 15px ${props => props.theme.colors.secondary};
    }
  }

  @media screen and (min-width: 725px) {
    display: none;
  }
`;
