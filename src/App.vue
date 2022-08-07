<template>
<div class="header">
  <h1>Sistema de Gestión Inventario</h1>
  <h2>Lorem Ipsum</h2>
</div>
<div class="container">
<nav>
		<ul class="mcd-menu">
			<li>
				<a href="" class="active">
					<i class="fa fa-home"></i>
					<strong>Home</strong>
					<small>Lorem Ipsum</small>
				</a>
			</li>
      <li>
				<a href="" v-if="!is_auth" v-on:click="loadLogin">
					<i class="fa fa-home"></i>
					<strong>Iniciar Sesión</strong>
					<small>Log in</small>
				</a>
			</li>
      <li>
				<a href="" v-if="!is_auth" v-on:click="loadSignUp">
					<i class="fa fa-home"></i>
					<strong>Registrarse</strong>
					<small>Sign in</small>
				</a>
			</li>
			<li>
				<a href="#" v-if="is_auth">
					<i class="fa fa-edit"></i>
					<strong>Rol</strong>
					<small>Role</small>
				</a>
        <ul>
					<li><a href="#"><i class="fa fa-globe"></i>Registrar</a></li>
					<li>
						<a href="#" v-if="is_auth" v-on:click="loadRol"><i class="fa fa-group"></i>Listar</a>
					</li>
					<li><a href="#"><i class="fa fa-trophy"></i>Actualizar</a></li>
					<li><a href="#"><i class="fa fa-certificate"></i>Eliminar</a></li>
				</ul>
			</li>
			<li>
				<a href="#" v-if="is_auth">
					<i class="fa fa-gift"></i>
					<strong>Productos</strong>
					<small>Products</small>
				</a>
        <ul>
					<li><a href="#" v-if="is_auth" v-on:click="loadProducto"><i class="fa fa-globe"></i>Registrar</a></li>
					<li>
						<a href="#" v-if="is_auth" v-on:click="loadListarProducto"><i class="fa fa-group"></i>Listar</a>
					</li>
					<li><a href="#"><i class="fa fa-trophy"></i>Actualizar</a></li>
					<li><a href="#"><i class="fa fa-certificate"></i>Eliminar</a></li>
				</ul>
			</li>
			<li>
				<a href="" v-if="is_auth">
					<i class="fa fa-globe"></i>
					<strong>Categorías</strong>
					<small>Categories</small>
				</a>
        <ul>
					<li><a href="#" v-if="is_auth" v-on:click="loadCategoria"><i class="fa fa-globe"></i>Registrar</a></li>
					<li>
						<a href="#" v-if="is_auth" v-on:click="loadListarCategoria"><i class="fa fa-group"></i>Listar</a>
					</li>
					<li><a href="#"><i class="fa fa-trophy"></i>Actualizar</a></li>
					<li><a href="#"><i class="fa fa-certificate"></i>Eliminar</a></li>
				</ul>
			</li>
      <li>
				<a href="" v-if="is_auth" v-on:click="logOut">
					<i class="fa fa-gift"></i>
					<strong>Cerrar Sesión</strong>
					<small>Sign off</small>
				</a>
			</li>
		</ul>
	</nav>
</div>
<div class="main-component">
      <router-view
        v-on:completedLogin="completedLogin"
        v-on:completedSignUp="completedSignUp"
        v-on:completedRegProducto="completedRegProducto"
        v-on:completedRegCategoria="completedRegCategoria"
        v-on:loadRol="loadRol"
        v-on:logOut="logOut"
        >
      </router-view>
</div>
<div class="footer">
      <h2>Lorem Ipsum - Misión TIC 2022</h2>
</div>

</template>

<script>
export default {
    name: 'App',
    data: function(){
        return{
          is_auth: false
        }
    },

    components: {
    },

    methods:{
      verifyAuth: function() {
        this.is_auth = localStorage.getItem("isAuth") || false;
        if (this.is_auth == false)
        this.$router.push({ name: "login" });
        else
        this.$router.push({ name: "home" });
      },

      loadLogin: function(){
        this.$router.push({ name: "login" });
      },

      loadSignUp: function(){
        this.$router.push({ name: "signUp" });
      },

      loadHome: function() {
        this.$router.push({ name: "home" });
      },

      loadCategoria: function() {
        this.$router.push({ name: "categorias" });
      },

      logOut: function () {
        localStorage.clear();
        alert("Sesión Cerrada");
        this.verifyAuth();
      },

      loadRol: function () {
        this.$router.push({ name: "rol" });
      },

      loadListarProducto: function () {
        this.$router.push({ name: "ListarProductos" });
      },

      loadListarCategoria: function () {
        this.$router.push({ name: "ListarCategorias" });
      },

      loadProducto: function () {
        this.$router.push({ name: "productos" });
      },

      completedLogin: function(data) {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", data.username);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        alert("Autenticación Exitosa");
        this.verifyAuth();
      },

      completedRegProducto: function(data) {
        alert("Registro de producto exitoso");
        this.verifyAuth();
      },

      completedRegCategoria: function(data) {
        alert("Registro de categoria exitoso");
        this.verifyAuth();
      },

      completedSignUp: function(data) {
        //alert("Registro de usuario Exitoso");
        this.completedLogin(data);
      },

      created: function(){
        this.verifyAuth()
      },
  }
}
</script>

<style>
body { 
	background: #EEE; 
	overflow-x:hidden;
}
.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}
.clearfix {
    *zoom: 1;
}

.container {
    position: relative;
    margin: 0px auto;
    padding: 50px 0;
    clear: both;
}
@media only screen and (min-width: 1200px) {
    .container {
        width: 1210px;
    }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
    .container {
        width: 1030px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 959px) {
    .container {
        width: 682px;
    }
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
    .container {
        width: 428px;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 479px) {
    .container {
        width: 320px;
        margin: 0 auto;
    }
}


  
.mcd-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: rgba(4, 4, 36, 0.945);
  /*height: 100px;*/
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  
  /* == */
  width: 250px;
  /* == */
}
.mcd-menu li {
  position: relative;
  /*float:left;*/
}
.mcd-menu li a {
  display: block;
  text-decoration: none;
  padding: 12px 20px;
  color: #E5E7E9;
  /*text-align: center;
  border-right: 1px solid #E7E7E7;*/
  
  /* == */
  text-align: left;
  height: 36px;
  position: relative;
  border-bottom: 1px solid rgb(238, 238, 238);
  /* == */
}
.mcd-menu li a i {
  /*display: block;
  font-size: 30px;
  margin-bottom: 10px;*/
  
  /* == */
  float: left;
  font-size: 20px;
  margin: 0 10px 0 0;
  /* == */
  
}
/* == */
.mcd-menu li a p {
  float: left;
  margin: 0 ;
}
/* == */

.mcd-menu li a strong {
  display: block;
  text-transform: uppercase;
}
.mcd-menu li a small {
  display: block;
  font-size: 18px;
}

.mcd-menu li a i, .mcd-menu li a strong, .mcd-menu li a small {
  position: relative;
  
  transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
}
.mcd-menu li:hover > a i {
    opacity: 1;
    -webkit-animation: moveFromTop 300ms ease-in-out;
    -moz-animation: moveFromTop 300ms ease-in-out;
    -ms-animation: moveFromTop 300ms ease-in-out;
    -o-animation: moveFromTop 300ms ease-in-out;
    animation: moveFromTop 300ms ease-in-out;
}
.mcd-menu li:hover a strong {
    opacity: 1;
    -webkit-animation: moveFromLeft 300ms ease-in-out;
    -moz-animation: moveFromLeft 300ms ease-in-out;
    -ms-animation: moveFromLeft 300ms ease-in-out;
    -o-animation: moveFromLeft 300ms ease-in-out;
    animation: moveFromLeft 300ms ease-in-out;
}
.mcd-menu li:hover a small {
    opacity: 1;
    -webkit-animation: moveFromRight 300ms ease-in-out;
    -moz-animation: moveFromRight 300ms ease-in-out;
    -ms-animation: moveFromRight 300ms ease-in-out;
    -o-animation: moveFromRight 300ms ease-in-out;
    animation: moveFromRight 300ms ease-in-out;
}

.mcd-menu li:hover > a {
  color: #e67e22;
}
.mcd-menu li a.active {
  position: relative;
  color: #e67e22;
  border:0;
  /*border-top: 4px solid #e67e22;
  border-bottom: 4px solid #e67e22;
  margin-top: -4px;*/
  box-shadow: 0 0 5px #DDD;
  -moz-box-shadow: 0 0 5px #DDD;
  -webkit-box-shadow: 0 0 5px #DDD;
  
  /* == */
  border-left: 4px solid #e67e22;
  border-right: 4px solid #e67e22;
  margin: 0 -4px;
  /* == */
}
.mcd-menu li a.active:before {
  content: "";
  position: absolute;
  /*top: 0;
  left: 45%;
  border-top: 5px solid #e67e22;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;*/
  
  /* == */
  top: 42%;
  left: 0;
  border-left: 5px solid #e67e22;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  /* == */
}

/* == */
.mcd-menu li a.active:after {
  content: "";
  position: absolute;
  top: 42%;
  right: 0;
  border-right: 5px solid #e67e22;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
/* == */

@keyframes moveFromTop {
    from {
        opacity: 0;
        -webkit-transform: translateY(200%);
        -moz-transform: translateY(200%);
        -ms-transform: translateY(200%);
        -o-transform: translateY(200%);
        transform: translateY(200%);
    }
    to {
        opacity: 1;
        -webkit-transform: translateY(0%);
        -moz-transform: translateY(0%);
        -ms-transform: translateY(0%);
        -o-transform: translateY(0%);
        transform: translateY(0%);
    }
}
@keyframes moveFromLeft {
    from {
        opacity: 0;
        -webkit-transform: translateX(200%);
        -moz-transform: translateX(200%);
        -ms-transform: translateX(200%);
        -o-transform: translateX(200%);
        transform: translateX(200%);
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -ms-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%);
    }
}
@keyframes moveFromRight {
    from {
        opacity: 0;
        -webkit-transform: translateX(-200%);
        -moz-transform: translateX(-200%);
        -ms-transform: translateX(-200%);
        -o-transform: translateX(-200%);
        transform: translateX(-200%);
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -ms-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%);
    }
}



.mcd-menu li ul,
.mcd-menu li ul li ul {
  position: absolute;
  height: auto;
  min-width: 200px;
  padding: 0;
  margin: 0;
  background: rgba(4, 4, 36, 0.945);
  /*border-top: 4px solid #e67e22;*/
  opacity: 0;
  visibility: hidden;
  transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
  /*top: 130px;*/
  z-index: 1000;
  
  /* == */
  left:280px;
  top: 0px;
  border-left: 4px solid #e67e22;
  /* == */
}
.mcd-menu li ul:before {
  content: "";
  position: absolute;
  /*top: -8px;
  left: 23%;
  border-bottom: 5px solid #e67e22;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;*/
  
  /* == */
  top: 25px;
  left: -9px;
  border-right: 5px solid #e67e22;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  /* == */
}
.mcd-menu li:hover > ul,
.mcd-menu li ul li:hover > ul {
  display: block;
  opacity: 1;
  visibility: visible;
  /*top: 100px;*/
  
  /* == */
  left:250px;
  /* == */
}
/*.mcd-menu li ul li {
  float: none;
}*/
.mcd-menu li ul li a {
  padding: 10px;
  text-align: left;
  border: 0;
  border-bottom: 1px solid #EEE;
  
  /* == */
  height: auto;
  /* == */
}
.mcd-menu li ul li a i {
  font-size: 16px;
  display: inline-block;
  margin: 0 10px 0 0;
}
.mcd-menu li ul li ul {
  left: 230px;
  top: 0;
  border: 0;
  border-left: 4px solid #e67e22;
}  
.mcd-menu li ul li ul:before {
  content: "";
  position: absolute;
  top: 15px;
  /*left: -14px;*/
  /* == */
  left: -9px;
  /* == */
  border-right: 5px solid #e67e22;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
}
.mcd-menu li ul li:hover > ul {
  top: 0px;
  left: 200px;
}






@media only screen and (min-width: 960px) and (max-width: 1199px) {
    .mcd-menu {
		margin-left:10px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 959px) {
    .mcd-menu {
		width: 200px;
	}
	.mcd-menu li a {
		height:30px;
	}
	.mcd-menu li a i {
		font-size: 22px;
	}
	.mcd-menu li a strong {
		font-size: 12px;
	}
	.mcd-menu li a small {
		font-size: 19px;
	}	
	.mcd-menu li > ul {
		min-width:180px;
	}
	.mcd-menu li:hover > ul {
		min-width:180px;
		left:200px;
	}
	.mcd-menu li ul li > ul, .mcd-menu li ul li ul li > ul {
		min-width:150px;
	}
	.mcd-menu li ul li:hover > ul {
		left:180px;
		min-width:150px;
	}
	.mcd-menu li ul li ul li:hover > ul {
		left:150px;
		min-width:150px;
	}
	.mcd-menu li ul a {
		font-size:12px;
	}
	.mcd-menu li ul a i {
		font-size:14px;
	}
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
	
	.mcd-menu { 
		width: 50px;
	}
	.mcd-menu li a { 
		position: relative;
		padding: 12px 16px;
		height:20px;
	}
	.mcd-menu li a small { 
		display: none;
	}
	.mcd-menu li a strong { 
		display: none;
	}
	.mcd-menu li a:hover strong,.mcd-menu li a.active strong {
		display:block;
		font-size:10px;
		padding:3px 0;
		position:absolute;
		bottom:0px;
		left:0;
		background:#e67e22;
		color:#FFF;
		min-width:100%;
		text-transform:lowercase;
		font-weight:normal;
		text-align:center;
	}
	.mcd-menu li > ul {
		min-width:180px;
		left:70px;
	}
	.mcd-menu li:hover > ul {
		min-width:180px;
		left:50px;
	}
	.mcd-menu li ul li > ul, .mcd-menu li ul li ul li > ul {
		min-width:150px;
	}
	.mcd-menu li ul li:hover > ul {
		left:180px;
		min-width:150px;
	}
	.mcd-menu li ul li ul li > ul {
		left:35px;
		top: 45px;
		border:0;
		border-top:4px solid #e67e22;
	}
	.mcd-menu li ul li ul li > ul:before {
		left:30px;
		top: -9px;
		border:0;
		border-bottom:5px solid #e67e22;
		border-left:5px solid transparent;
		border-right:5px solid transparent;
	}
	.mcd-menu li ul li ul li:hover > ul {
		left:30px;
		min-width:150px;
		top: 35px;
	}
	.mcd-menu li ul a {
		font-size:12px;
	}
	.mcd-menu li ul a i {
		font-size:14px;
	}
	
}

@media only screen and (max-width: 479px) {
    .mcd-menu { 
		width: 50px;
	}
	.mcd-menu li a { 
		position: relative;
		padding: 12px 16px;
		height:20px;
	}
	.mcd-menu li a small { 
		display: none;
	}
	.mcd-menu li a strong { 
		display: none;
	}
	.mcd-menu li a:hover strong,.mcd-menu li a.active strong {
		display:block;
		font-size:10px;
		padding:3px 0;
		position:absolute;
		bottom:0px;
		left:0;
		background:#e67e22;
		color:#FFF;
		min-width:100%;
		text-transform:lowercase;
		font-weight:normal;
		text-align:center;
	}
	.mcd-menu li > ul {
		min-width:180px;
		left:70px;
	}
	.mcd-menu li:hover > ul {
		min-width:180px;
		left:50px;
	}
	.mcd-menu li ul li > ul, .mcd-menu li ul li ul li > ul {
		min-width:150px;
	}
	.mcd-menu li ul li:hover > ul {
		left:180px;
		min-width:150px;
	}
	.mcd-menu li ul li ul li > ul {
		left:35px;
		top: 45px;
		border:0;
		border-top:4px solid #e67e22;
	}
	.mcd-menu li ul li ul li > ul:before {
		left:30px;
		top: -9px;
		border:0;
		border-bottom:5px solid #e67e22;
		border-left:5px solid transparent;
		border-right:5px solid transparent;
	}
	.mcd-menu li ul li ul li:hover > ul {
		left:30px;
		min-width:150px;
		top: 35px;
	}
	.mcd-menu li ul a {
		font-size:12px;
	}
	.mcd-menu li ul a i {
		font-size:14px;
	}
    
}
.main-component{
  height: 43vh;
  margin: 0%;
  padding: 0%;
}

.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 10px;
  background-color: rgba(4, 4, 36, 0.945);
  color: #E5E7E9;
}

.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  background-color: rgba(4, 4, 36, 0.945);
  color:#E5E7E9 ;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1,h2{
  width: 30%;
  text-align: center;
}
</style>
