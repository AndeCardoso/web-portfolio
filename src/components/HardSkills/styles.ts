import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 740px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundSecondary};

  @media screen and (max-width: 700px) {
    padding: 100px 0;
  }

  .wrapper {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      width: 50%;

      h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 30px;

        svg {
          color: ${props => props.theme.colors.secondary};
        }
      }

      p {
        width: 100%;
        font-size: 1.2rem;
        text-align: justify;
        padding: 0 15px;
      }

      .buttons {
        display: flex;
        justify-content: space-around;
      }

      @media screen and (max-width: 750px) {
        width: 100%;
      }
    }

    .skills-icons {
      width: 50%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      svg {
        padding: 5px;
        width: 140px;
        height: auto;
        color: ${props => props.theme.colors.secondary};
        transition: ease-in-out all 0.5s;

        :hover {
          width: 150px;
          filter: drop-shadow(0 0 10px black) brightness(130%);
        }

        @media screen and (max-width: 840px) {
          width: 110px;

          :hover {
            width: 115px;
            filter: drop-shadow(0 0 10px black) brightness(130%);
          }
        }

        @media screen and (max-width: 750px) {
          width: 80px;

          :hover {
            width: 85px;
            filter: drop-shadow(0 0 10px black) brightness(130%);
          }
        }
        
        @media screen and (max-width: 321px) {
          width: 70px;

          :hover {
            width: 75px;
            filter: drop-shadow(0 0 10px black) brightness(130%);
          }
        }
      }

      @media screen and (max-width: 750px) {
        width: 100%;
      }
      
      @media screen and (max-width: 700px) {
        max-width: 375px;
      }
    }

    @media screen and (max-width: 750px) {
      flex-direction: column;
    }
  }
`;
