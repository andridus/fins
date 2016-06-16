can.Component.extend({
  tag: "sistema-entrar",
  template: can.view('/components/sistema/entrar/entrar.stache'),
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