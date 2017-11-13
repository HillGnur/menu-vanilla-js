# Menu vanilla JS

### Método de uso

**HTML**

Coloque os seguintes data-attributes em seu HTML element:

`<html data-menu-active="" data-opacity="0"></html>`

Em seguida, você deve adicionar qual será sua lista a ser exibida, e definir ao menos dois botões para que ela seja aberta/fechada:

`<ul data-collapse="collapse-menu" data-menu-id="0" data-menu-active=""></ul>`

`<button data-menu="open" data-menu-id="0"></button>`

`<button data-menu="close" data-menu-id="0"></button>`


*• A estilização em CSS fica a seu critério*

*• Cada menu e seus respectivos items devem conter id's únicas, sugerimos que sigam com as id's como sequência em "0, 1, 2 ..."*