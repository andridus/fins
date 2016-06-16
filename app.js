head.load([
//condigurações
    '/config/config.js',    
//importando módulos
    '/models/projeto.js',
    '/models/usuario.js',





//importando componentes úteis
    '/components/alerta/alerta.js'
    ],
    function() {
    //checa se está logado
    if(1){
    	head.load('/components/menus/principal/principal.js', function() {
        // Call a function when done
        $('#menu').html(can.view.stache('<menu-principal/>'));
    	});
    }

    var Router = can.Control({
        init : function(el, options) {
        },

        'casa route' : function(data) {
        	console.log('entrou em casa')
            // the route says todo/[id]
            // data.id is the id or default value
        },
        'cadastro route' : function(data){
            head.load('/components/sistema/cadastro/cadastro.js', function() {
            // Call a function when done
                $('#conteudo').html(can.view.stache('<sistema-cadastro/>'))
            });
        },
        'projetos route' : function(data){
            head.load('/components/pages/projetos/todos/todos.js', function() {
            // Call a function when done
            $('#conteudo').html(can.view.stache('<projeto-todos/>'))
            });
        },
        'projetos/:id route' : function(data) {
            console.log('entrou no proejeto id#' + data.id);
            head.load('/components/pages/projetos/visualizar/visualizar.js', function() {
            // Call a function when done
            $('#conteudo').html(can.view.stache('<projeto-visualizar {projeto_id}="'+data.id+'"/>'))
            });
        },
        ':page route' : function(data) {
            console.log('entrou em :page')
            $('#conteudo').html('entrou em :page');
        },
        ':page/:id route' : function(data) {
            console.log('entrou em :page/:id')
            $('#conteudo').html('entrou em :page/:id');
        },
        'route' : function(data){
            head.load('/components/pages/projetos/todos/todos.js', function() {
            // Call a function when done
            $('#conteudo').html(can.view.stache('<projeto-todos/>'))
            });
        }
    });
    new Router(window);
    can.route.ready(); // do not forget to initialize can.route

});