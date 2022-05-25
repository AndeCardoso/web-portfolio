import styled from 'styled-components';

export const TooltipCard = styled.div`
  display: flex;
  justify-content: center;

  .tooltip-item {

  }

  .tooltip-box {
    position: absolute;
    color: #fff;
    background-color: ${props => props.theme.colors.primary};
    width: auto;
    padding: 8px 8px;
    border-radius: 4px;
    visibility: hidden;
    transform: scale(.3);
    transition: all ease-in-out .3s;
  }

  & .tooltip-item:hover + .tooltip-box {
    pointer-events: none;
    visibility: visible;
    transform: scale(1);
    color: #fff;
    font-weight: 500;
    background-color: ${props => props.theme.colors.primary};
    width: auto;
    padding: 8px 8px;
    border-radius: 4px;
  }
`;
