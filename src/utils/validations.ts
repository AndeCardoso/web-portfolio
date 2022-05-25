interface contactFormValidation {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export const formValidation = ({name, email, message, subject}: contactFormValidation) => {
  if(name === undefined || email === undefined || message === undefined) {
    return 'Preencha todos os campos, por favor :)';

  } else if(name?.length < 2) {
    return 'O nome precisa ter ao menos 2 caracteres!';

  } else if(!email?.includes('@') || !email?.includes('.')) {
    return 'Informe um e-mail válido, por favor :)';

  } else if(subject === undefined) {
    return 'Selecione um assunto pra mim saber do que se trata, por favor :)';

  } else if(message?.length < 5) {
    return 'Seja um pouco mais específico em sua mensagem, por favor :)';
  }
  
  return true;
};
