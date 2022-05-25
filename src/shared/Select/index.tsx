import { Control, Controller } from 'react-hook-form';
import { Container } from './styles';

interface ISelect {
  name: string;
  placeholder: string;
  options: string[];
  control: Control;
}

export const Select = ({name, placeholder, options, control}: ISelect) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({
          field: {onChange}
        }) =>(
          <select
            placeholder={placeholder}
            defaultValue=''
            onChange={onChange}
          >
            <option disabled value=''>Assunto...</option>
            {
              options.map((opt) => <option key={opt} value={opt}>{opt}</option>)
            }
          </select>
        )}
      />
    </Container>
  );
};
