data = {

	init: function(){
		var btn = document.getElementById("login");
		btn.addEventListener("click", this.valorUsuarioSenha, false);
	},

	valorUsuarioSenha: {
		usuario: 'junior'
		
	},

	verificaUsuario: function(){
		var t = data.valorUsuarioSenha;
		alert(t);
	}

	
};
