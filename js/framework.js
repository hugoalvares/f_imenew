var js = {

    bandeiraClick : function() {
        window.location.href = 'mapa.html';
    },

    mapaClick : function() {
        window.location.href = 'cardapio.html';
    },

    produtoClick : function() {
        window.location.href = 'detalhe.html';
    },

    adicionar : function() {
    	window.location.href = 'cardapio.html';
    },

    loadIndex : function(){
        window.location.href = 'index.html';
    },

    showConferir : function(){
        window.location.href = 'conferir.html';
    },

    showFuncoes : function(){
        window.location.href = 'funcoes.html';
    },    

    showConta : function(){
        window.location.href = 'conta.html';
    },    

    chamarGarcom : function(){
        alert('o garçom foi notificado com sucesso');
    },    

    grupoAtual : '',

    buildGroups : function() {
        $('#listaGrupos').html('');

        var grupos = new Array();
        grupos.push('pizzas');
        grupos.push('saladas');
        grupos.push('vinhos');
        grupos.push('refrigerantes');

        var html = '';
        for (var idx in grupos) {
            html = html + '<div id="' + grupos[idx] + '" class="grupo" onclick="js.mostraProdutos(this.id);">' + grupos[idx] + '</div><div id="produtos' + grupos[idx] + '" class="produtos"></div>';
        }

        $('#listaGrupos').html(html);        
    },

    transmitir : function() {
        alert('pedido transmitido com sucesso');
        js.mapaClick();
    },

    solicitarConta : function() {
        alert('conta solicitada com sucesso');
        js.showFuncoes();
    },    

    mostraProdutos : function(grupo) {
        $('.produto').html('');

        var produtos = new Array();
        produtos.push('maguerita');
        produtos.push('4 queijos');
        produtos.push('portuguesa');
        produtos.push('pepperoni');

        var grupos = new Array();
        $('#produtos'+grupo).html('');

        var html = '';
        for (var idx in produtos) {
            html = html + '<div class="produto" onclick="js.produtoClick()">' + produtos[idx] + '</div>'
        }

        $('#produtos'+grupo).html(html);
    }
}