can.Component.extend({
  tag: "sistema-cadastro",
  template: can.view('/components/sistema/cadastro/cadastro.stache'),
  viewModel: {
    usuario:{},
    verifica:function(campo,valor){
      var m = Usuario;
      var that = this;
      switch(campo){
        case "usuario":
          if(valor!=""){
            var ret = m.existe(campo,valor,function(r){
              that.usuario.attr(campo+"_existe",r);
              if(valor.length>6 && r==false){
                that.usuario.attr(campo+"_ok",true);
              }else{
                that.usuario.attr(campo+"_ok",false);
              }
            });
          }else{
            that.usuario.attr(campo+"_existe",false);
            that.usuario.attr(campo+"_ok",false);
          }
          break;
        case "email":
          var s = valor.split("@")
          if(valor!="" && s.length > 1 && s[1].length>1){
            var ret = m.existe(campo,valor,function(r){
              that.usuario.attr(campo+"_existe",r);
              if(r==false){
                that.usuario.attr(campo+"_ok",true);
              }else{
                that.usuario.attr(campo+"_ok",false);
              }
            });
          }else{
            that.usuario.attr(campo+"_existe",false);
            that.usuario.attr(campo+"_ok",false);
          }
          break;
        case "senha":
          if(valor.length>6){
            that.usuario.attr(campo+"_ok",true);
          }else{
            that.usuario.attr(campo+"_ok",false);
          }
          that.usuario.attr("re_senha","");
          that.usuario.attr("re_senha_ok",false);

          break;
        case "re_senha":
          if(that.usuario.senha==that.usuario.re_senha)
          {
            that.usuario.attr("senha_codificada",CryptoJS.SHA1(that.usuario.senha));
            that.usuario.attr(campo+"_ok",true);
          }else{
            that.usuario.attr(campo+"_ok",false);
          }  
          break;
        default:
          break;
      }
     
    },
    cadastrar:function(ev,model){
        if(ev) {
            ev.preventDefault();
        }
        var that = this;
        var cad = model.usuario;
        if(cad.usuario_ok==true &&
           cad.email_ok==true &&
           cad.senha_ok==true &&
           cad.re_senha_ok==true
          ){
            var user = Usuario.novo({usuario:cad.usuario,
                            senha: cad.senha_codificada.toString(CryptoJS.enc.Hex),
                            email: cad.email},function(){

                              alert("cadastro salvo");
                              that.attr("usuario",{});

                            },function(){

                              alert("cadastro não salvo");
                              that.attr("usuario",{});

                            });
          }

        return false
      }
  }
});
