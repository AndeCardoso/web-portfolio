import { ReactNode } from 'react';
import { TooltipCard } from './styles';

interface ITooltip {
  item: ReactNode;
  text: string;
  position?: string;
}

export const Tooltip = ({item, text, position}: ITooltip) => {
  return (
    <TooltipCard>
      <div className='tooltip-item'>
        {item}
      </div>
      <div className={'tooltip-box ' + position}>
        {text}
      </div>
    </TooltipCard>
  );
};
