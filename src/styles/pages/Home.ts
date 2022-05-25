import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  min-height: 680px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2.5rem;
  margin-top: 90px;
  background: url('/imgs/bg-home.png') no-repeat center;
  background-size: cover;
  
  .wrapper {
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    @media screen and (max-width: 1215px) {
      width: 100%;
      justify-content: center;
      padding: 30px 15px;
    }

    @media screen and (max-width: 750px) {
      flex-direction: column;
    }

    div {
      min-height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-weight: 500;
        font-size: 4rem;
      }

      span {
        font-weight: 500;

        b {
          font-weight: 700;
          background: -webkit-linear-gradient(-70deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
          filter: drop-shadow(0 0 5px black) brightness(135%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all ease-in-out 0.5s;

          :hover {
            font-size: 2.6rem;
            filter: drop-shadow(0 0 10px black) brightness(140%);
          }
        }
      }

      p {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 376px) {
        h3 {
          font-size: 3.5rem;
        }

        span {
          font-weight: 500;

          b {
            font-size: 1.8rem;
            font-weight: 700;
            background: -webkit-linear-gradient(-70deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
            filter: drop-shadow(0 0 5px black) brightness(135%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all ease-in-out 0.5s;

            :hover {
              font-size: 2.6rem;
              filter: drop-shadow(0 0 10px black) brightness(140%);
            }
          }
        }
      }
    }

    img {
      width: 380px;
      height: 380px;
      margin-left: 30px;
      filter: drop-shadow(0 0 8px black) brightness(100%);
      transition: ease-in-out all 0.5s;

      :hover {
        width: 400px;
        height: 400px;
        filter: drop-shadow(0 0 16px black) brightness(130%);
      }  

      @media screen and (max-width: 769px) {
        width: 350px;
        margin-left: 0;

        :hover {
          width: 360px;
        }
      }

      @media screen and (max-width: 426px) {
        width: 90%;

        :hover {
          width: 92%;
        }
      }
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2.5rem;
  background-image: linear-gradient(-125deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    
    .logo {
      width: 250px;
      filter: drop-shadow(0 0 3px black) brightness(100%);
      transition: all ease-in-out 0.5s;
  
      :hover {
        width: 270px;
        filter: drop-shadow(0 0 5px black) brightness(130%);
      }
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      font-size: 1rem;
    }

    p {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-style: italic;
    }

    .made-by {
      display: flex;
      text-align: center;

      @media screen and (max-width: 441px) {
        flex-direction: column;
      }

      .name {
        margin: 0 5px;
      }

      a {
        margin: 0;
        font-weight: 500;
      }

      p {
        align-items: baseline;

        a {
          display: flex;
          margin-left: 5px;
        }
      }

      svg {
        margin-left: 5px;
      }
    }
  }
`;
