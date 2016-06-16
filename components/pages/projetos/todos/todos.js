can.Component.extend({
  tag: "projeto-todos",
  template: can.view('/components/pages/projetos/todos/todos.stache'),
  viewModel: {
    visible: false,
    message: "Hello There!",
    projetos: new Projeto.List({}),
    abrir_projeto:function(id){
      console.log("aqui",id);
      can.route.attr({route:'projetos/:id', id: id});
      
    },
    star:function(){
      $("body").append(can.view.stache("<fins-alerta />"));
    }
  },
 
});