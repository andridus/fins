can.Component.extend({
  tag: "projeto-visualizar",
  template: can.view('/components/pages/projetos/visualizar/visualizar.stache'),
  init:function(){
    console.log("entrou",this);
  },
  viewModel: {
    projeto_id:0,
    projeto: Projeto.getOne({id:can.route.attr("id")}),
    abrir_projeto:function(id){
      console.log("aqui",id);
      route.attr({route:':page/:id', page: 'projetos', id: id},true);
      
    }
  },
});