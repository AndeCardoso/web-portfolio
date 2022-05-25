export const content = (section: string) => {
  const contents = {
    about:
    `Meu nome é Anderson Cardoso, tenho 28 anos, e reencontrei na programação uma paixão antiga pelo aprender.
    Me envolvo com tecnologia desde criança aos 10 anos, quando comecei meus cursinhos técnicos, iniciando pelo básico de informática, passando pelos cursos de Web Design aos 12, até meus 14 anos quando me especializei em suporte técnico e manutenção, onde logo após minha formatura no curso já estava trabalhando como técnico estagiário.
    A partir daí, vim aprimorando minhas skills tanto como técnico de suporte como desenvolvedor, até que tive meu primeiro contato com a plataforma .Net na faculdade, me tornando um "especialista" em Vb.Net que logo em seguida, se tornou obsoleto.
    Após essa mudança no foco do curso, me foco em desenvolvimento web com ASP e mobile com C#, me tornando um especialista na stack, onde acabei mais uma vez, me frustrando com o grande fracasso que se tornou o Windows Phone.
    E então em julho de 2021, cerca de 5 anos depois, busco mais uma vez conhecimento, focando em desenvolvimento web com JavaScript utilizando do ambiente Node e seus frameworks e libs, para solucionar problemas, inovar e entregar valor às pessoas.`,

    skills: 
      `Me considero um autodidata, pois consigo aprender com certa facilidade e rapidez, muitas vezes apenas analisando algo que já esta em funcionamento e atendendo alguma necessidade, consigo aproveitar muito mais do que uma aula teórica com projetos genéricos de exemplos.
      Com grande aptidão para atividades artísticas, sempre fui reconhecido como o "Front-End Guy", criativo e inovador nas ideias, capaz de trazer personalidade a tudo que faz, mas também me considero muito lógico e racional, sempre penso duas vezes se uma tarefa não pode ser melhor aproveitada, se não existe uma solução mais ágil e performática para um processo.
      Acredito muito na disseminação de conhecimento, e que passar adiante aquilo que aprendemos ou experienciamos, cria uma grande ciclo de evolução na sociedade, e por consequência mais avanços e mais soluções para novas necessidades que surgem diariamente.`
  };

  switch(section) {
  case 'about':
    return contents.about;
  case 'skills':
    return contents.skills;
  default: 'Algo de errado aconteceu...';
  }
};
