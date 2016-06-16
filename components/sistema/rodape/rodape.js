can.Component.extend({
  tag: "sistema-rodape",
  template: can.view('/components/sistema/rodape/rodape.stache'),
  viewModel: {
    visible: false,
    message: "Hello There!"
  },
  events: {
    cadastrar:function(ev,model){
        if(ev) {
            ev.preventDefault();
        }
        console.log(model,ev);
        return false
      }
  }
});