import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundSecondary};

  @media screen and (max-width: 426px) {
    padding: 100px 0;
  }

  .wrapper {
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

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
      text-align: center;
      font-size: 1.5rem;

      @media screen and (max-width: 425px) {
        font-size: 1.3rem;
      }
      
      @media screen and (max-width: 374px) {
        font-size: 1.1rem;
      }
    }

    .links {
      display: flex;
      margin-top: 30px;

      svg {
        font-size: 5rem;
        color:  ${props => props.theme.colors.secondary};
      }

      .first-group {
        display: flex;
      }

      .second-group {
        display: flex;
      }

      @media screen and (max-width: 495px) {
        flex-direction: column;
      }
    }
  }
`;
