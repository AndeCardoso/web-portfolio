import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 10px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    width: auto;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;

    @media screen and (max-width: 750px) {
      width: 100%;
    }
  }

  textarea {
    width: 100%;
    height: 160px;
    padding: 10px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    resize: vertical;
  }
`;
