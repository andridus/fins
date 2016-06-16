can.Component.extend({
  tag: "menu-principal",
  template: can.view('/components/menus/principal/principal.stache'),
  viewModel: {
    entrar:function(){
      var that = this;
      that.attr("senha",CryptoJS.SHA1(that.usuario.senha));
      $.post(HOST+"/sistema/login",{usuario:that.usuario.toLowerCase()},function(r){
        console.log(r);
      })
      return false;
    }
  }
  
});