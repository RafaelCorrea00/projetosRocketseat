# Tags Input

## Variáveis

- [x] coleção de tags
- [x] container de tags do html
- [x] o input que irá receber a digitação de uma nova tag

## Eventos

- [x] ao digitar e clicar em enter, adicionar a tag
    - [x] separar o texto por vírgulas
    - [x] verificar se após a separação, o valor não está vazio
    - [x] se estiver vazio, não adicionar à coleção de tags
    - [x] do contrário, adicionar à coleção
    - [x] atualizar as tags do html
        - [x] recriar a visualização das tags
    - [x] limpar o campo de input

## Funções
- [x] criar funcionalidade para criar a tag
    - [x] criar uma nova caixa no html
    - [x] atribuir a classe `tag` para essa caixa
    - [x] criar uma nova caixa para o conteúdo de texto da nova tag
    - [x] adicionar essa nova caixa à caixa tag criada logo acima
    - [x] criar o botão de deletar
    - [x] adicionar classe ao botão
    - [x] adicionar um identificador ao botão, para ele saber qual elemento irá deletar
    - [x] criar funcionalidade de deletar ao clicar no botão
        - [x] verificar qual é o elemento na coleção de tags a ser removido
        - [x] atualizar as tags no html
    - [x] adicionar o botão à caixa tag criada no começo dessa funcionalidade