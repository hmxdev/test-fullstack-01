# Teste para vaga desenvolvimento fullstack


## Contexto
A ONG Dev Do Bem é uma instituição que ajuda os profissionais da área de desenvolvimento, idosos em situação de abandono e risco, a terem melhor condição de vida. Por ser uma ONG a Dev Do Bem, mantém  sua estrutura e ajuda seu público através das doações que recebe, e está lançando uma nova campanha, a "Dev Em Forma", que tem o objetivo de captar doações para fazer a reforma da sua quadra poli esportiva. 




## Problema
A ONG Dev Do Bem, não tem um canal digital para captar doações, mas para essa nova campanha quer usar a internet para ter mais alcance, e contrataram você para ajudá-los.




A Campanha vai ter uma landing page apresentando a campanha e dizendo porque eles precisam reformar sua quadra. Na LP também vai ter as opções de valores para doação. Quando o usuário clicar em alguma opção de valor, será redirecionado para a página da primeira etapa do checkout, onde terá um formulário com os campos: 
- nome;
- email;
- telefone;
- CPF;
- número do cartão de crédito;
- data de expiração;
- código de segurança;
- nome do titular;


logo abaixo dos campos, terá um box de informações com o resumo da doação, mostrando o valor que será doado,e terá um botão “finalizar”, ao clicar no botão, o sistema irá salvar os dados de pagamento e o valor da doação no banco de dados, (os dados do cartão devem ser criptografados antes de salvar). Essa ação deve gerar um registro de doação com status “pendente”, e fazer a integração com o gateway de pagamento (que fará o processamento do pagamento), o gateway vai retornar a resposta do pagamento, o sistema atualiza o status do registro de doação com a resposta do gateway (aprovado ou recusado), se for recusado, exibe a mensagem de recusado para o usuário, se for aprovado, redireciona o usuário para página de obrigado com uma mensagem de agradecimento pela doação. O sistema envia um email de agradecimento para o doador, e envia um email de notificação para a ONG informando uma nova doação.




## Suas missão
- 1: Faça um fork deste repositório;
- 2: Crie um diagrama de fluxo com os processos que você entendeu do problema, distinguindo o que deve acontecer no lado do frontend e no lado do backend. E adicionar o arquivo do diagrama (PDF ou JPG) no seu repositório;
- 3: Crie o diagrama de modelagem da base de dados, especificando as tabelas, campos e relacionamento entre as tabelas;
- 4: Crie um projeto em Nodejs ou PHP, de forma minimalista, para implementar a solução do problema proposto. Use docker compose para isolar os ambientes das aplicações
- 4.2: Simule a integração com o gateway de pagamento (onde você envia os dados de pagamento para uma API externa, e recebe uma resposta).
- 4.3: Simule a integração de envio de email por algum serviço externo (onde você envia os dados de email para uma API externa e recebe uma resposta);
- 5: Crie um arquivo readme.md explicando sua abordagem para a solução desenvolvida
- 6: Faça pull-request do seu projeto para este repositório

