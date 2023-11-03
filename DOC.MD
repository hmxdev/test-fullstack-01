Landing Page da Campanha:

A campanha tem uma landing page para apresentar a causa da reforma da quadra.
A landing page exibe informações sobre por que a reforma é necessária.
Opções de Valores para Doação:

A landing page exibe opções de valores para doação, permitindo que os usuários escolham quanto desejam doar.
Os valores são exibidos em moeda local (BRL).
Primeira Etapa do Checkout:

Quando um usuário seleciona uma opção de valor, ele é redirecionado para a primeira etapa do processo de checkout.
Formulário de Informações do Usuário:

A primeira etapa do checkout exibe um formulário com os seguintes campos:
Nome
Email
Telefone
CPF
Número do cartão de crédito
Data de expiração do cartão
Código de segurança do cartão
Nome do titular do cartão
Processo de Pagamento:

Após o preenchimento do formulário, os detalhes do cartão de crédito são usados para processar o pagamento.
A plataforma de pagamento (por exemplo, Stripe) é usada para lidar com o pagamento com segurança.
Registro de Doação:

Após um pagamento bem-sucedido, os detalhes da doação são registrados.
Os detalhes registrados incluem o valor da doação, nome, email do usuário e outros detalhes relevantes.
Confirmação do Pagamento:

Após o pagamento, o usuário é redirecionado para uma página de confirmação, indicando que a doação foi registrada com sucesso.
Feedback ao Usuário:

O usuário recebe uma confirmação por email ou uma mensagem na página indicando que a doação foi registrada com sucesso


OBS: Nem tudo foi feito, mas esse seria o fluxo da resolução toda do teste

Dados para registrar um pagamento:

número do cartão: 378282246310005
data: qualquer data futura
cvv: qualquer número com 4 dígitos 

fonte: https://stripe.com/docs/testing