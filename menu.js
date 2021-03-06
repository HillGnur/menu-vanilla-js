(function(){
    //Declaração de variáveis
    var doc = document.documentElement;
    var openMenus = document.querySelectorAll("button[data-menu=open]");
    var closeMenus = document.querySelectorAll("button[data-menu=close]");
    var menus = document.querySelectorAll("ul[data-collapse=collapse-menu]");
    //Varrer o array de menus coletando suas id's e usando para as funções dos botões
    openMenus.forEach(function(openMenu, i, openMenus){
        //Declaração da variável id para selecionar os menus corretamente
        openMenu.addEventListener("click", function(){
            var id = parseFloat(this.dataset.menuId);
            doc.setAttribute("data-menu-active", "active");
            menus[id].setAttribute("data-menu-active", "active");
            setTimeout(function(){
                doc.setAttribute("data-opacity", "1"); 
            },50);
        });
    });
    closeMenus.forEach(function(closeMenu, i, closeMenus){
        closeMenus[i].addEventListener("click", function(){
            var id = parseFloat(this.dataset.menuId);
            doc.setAttribute("data-opacity", "0");
            menus[id].setAttribute("data-menu-active", "");
            setTimeout(function(){
                doc.setAttribute("data-menu-active", "");
            },600);
        });
    });
    //Fechar qualquer/todos os menus ao clicar no document-overlay
    doc.addEventListener("click", function(event){
        //document.documentElement apenas, filhos não são selecionados pela condição
        if(event.target === document.documentElement){
            var menusAtivos = document.querySelectorAll("ul[data-menu-active=active]");
            //forEach function para desabilitar todos os menus.
            menusAtivos.forEach(function(menuAtivo,index,menusAtivos){
                menuAtivo.setAttribute("data-menu-active", "");
            })
            doc.setAttribute("data-opacity", "0");
            setTimeout(function(){
                doc.setAttribute("data-menu-active", "");
            },600);
        };
    });
})();