import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .wrapper {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 750px) {
      padding: 60px 15px;
    }

    @media screen and (max-width: 426px) {
      padding: 100px 15px;
    }

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

    .projects-group {
      width: 98%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .icons {
        font-size: 2.5rem;
      }

      .project-main {
        height: 270px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border: solid 3px;
        border-image: linear-gradient(45deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary}) 1;
        padding: 30px 15px;
        padding-bottom: 0;
        margin-bottom: 15px;
        transition: ease-in-out all 0.5s;

        :hover {
          height: 285px;
        }

        h3 {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        p {
          text-align: justify;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .projects-list {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;

        @media screen and (max-width: 750px) {
          flex-direction: column;
        }

        .project {
          width: 49%;
          height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          border: solid 3px;
          border-image: linear-gradient(45deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary}) 1;
          padding: 30px 15px;
          padding-bottom: 0;
          transition: ease-in-out all 0.5s ;

          :hover {
            width: 50%;
            height: 265px;
          }

          h3 {
            font-size: 2rem;
            margin-bottom: 15px;
          }

          p {
            text-align: justify;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          @media screen and (max-width: 750px) {
            width: 100%;
            height: 270px;
            margin-bottom: 15px;

            :hover {
              width: 100%;
              height: 290px;
            }
          }
        }
      }
    }

    .more-projects {
      margin: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      transition: all ease-in-out 0.5s;

      :hover {
        font-size: 1.7rem;
        filter: drop-shadow(0 0 8px ${props => props.theme.colors.secondary});
      }

      @media screen and (max-width: 376px) {
        font-size: 1.3rem;
        
        :hover {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
