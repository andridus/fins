var Usuario = can.Model.extend({
  findAll: 'GET '+HOST+'/usuario/todos',
  findOne: 'GET '+HOST+'/usuario/unico/{id}',
  create:  'POST '+HOST+'/usuario/salvar',
  update:  'PUT '+HOST+'/usuario/atualizar/{id}',
  destroy: 'DELETE '+HOST+'/usuario/excluir{id}',
  getOne: function(data){
  	var result = new Usuario();
  		Usuario.findOne(data).then(function(data){
  			result.attr(data.attr(),true);
  		});
  		return result;
  },
  novo: function(data,fn,fn2){
    var result = new Usuario(data);
      result.save(function(data){
        result.attr(data.attr(),true);
        if(result.id)
        {
          fn();
        }else{
          fn2();
        }
      });
      return result;
  },
  existe: function(campo,valor,fn){
    var result = false;
      $.get(HOST+"/usuario/existe",{
        campo:campo,
        valor:valor
      },function(r){
        fn(r.existe);
      })
  }
},{});