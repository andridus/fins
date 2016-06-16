can.Component.extend({
  tag: "fins-alerta",
  template: can.view('/components/alerta/alerta.stache'),
  init:function(){
    var that = this;
    var win_width = $(window).width();
    var win_height = $(window).height();
    that.viewModel.attr("el",this._control.element[0]);

    var left = (win_width - that.viewModel.width)/2;
    var top = (win_height - that.viewModel.height)/2;

    that.viewModel.attr("left",left);
    that.viewModel.attr("top",top);
    if(that.viewModel.tipo=="danger")
      $.playSound("/sounds/alert");
  },
  viewModel: {
    aceitar:"Aceitar",
    cancelar:"Cancelar",
    ok:"Certo!",
    conteudo:"lorem ipsum",
    titulo:"Alguma coisa aqui",
    tipo:"danger",
    width:300,
    height:200,
    fechar:function(elem){
      var that = this;
      that.el.remove();
      
      
    }
  },
});