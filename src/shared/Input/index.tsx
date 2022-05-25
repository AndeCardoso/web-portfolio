import { Controller, Control } from 'react-hook-form';
import { Container } from './styles';

interface IInput {
  placeholder: string;
  name: string;
  control: Control;
  fullWidth?: boolean;
}

export const Input = ({ name, control, placeholder }: IInput) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({
          field: {onChange, value},
        }) =>(
          <input
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </Container>
  );
};

export const TextArea = ({ name, control, placeholder, fullWidth }: IInput) => {
  return (
    <Container style={{ width: fullWidth ? 'auto' : '100%'}}>
      <Controller
        name={name}
        control={control}
        render={({
          field: {onChange, value},
        }) =>(
          <textarea
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </Container>
  );
};
