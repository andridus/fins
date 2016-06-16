var Projeto = can.Model.extend({
  findAll: 'GET '+HOST+'/projetos',
  findOne: 'GET '+HOST+'/projetos/{id}',
  create:  'POST '+HOST+'/projetos',
  update:  'PUT '+HOST+'/projetos/{id}',
  destroy: 'DELETE '+HOST+'/projetos/{id}',
  getOne: function(data){
  	var result = new Projeto();
  		Projeto.findOne(data).then(function(data){
  			result.attr(data.attr(),true);
  		});
  		return result;
  }
},{});