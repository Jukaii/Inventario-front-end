<template>

            <div class="registro_categorias">
                <h2>Actualizar Categorias Lorem Ipsum</h2>
                 <form v-on:submit.prevent="processUpdateCategoria" >
                <div class="user-box">
                    <input type="text" required="" v-model="user.nombreCategoria">
                    <label>Nombre Categoria</label>
                </div>
                    <br> 
                    <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Actualizar Categoria</button>              
               </form>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "ActualizarCategorias",
    data() {
        return {
            user: []
        }
    },
    mounted()
        
        {
            let vue =this;
            axios.get('https://sginventario-be.herokuapp.com/categorias/'+this.$route.params.id+'/')
           .then(function(response) {
                vue.user = response.data;
                console.log(vue.user)
           })
        },
    methods: {
      processUpdateCategoria: function(){
          axios.put(
              "https://sginventario-be.herokuapp.com/categorias/"+this.$route.params.id+'/',
              this.user,
              {headers: {}}
          )
              .then((result) => {
                  let dataUpdate = {
                      nombreCategoria: this.user.nombreCategoria,
                      
              }
                  this.$emit('completedUpdateCategoria', dataUpdate)
              })
              .catch((error) => {
                  console.log(error)
                  alert("ERROR: Fallo en el registro.");
              });
      },
    }
}
</script>

<style>
.registro_categorias{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(4, 4, 36, 0.945);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}
.registro_categorias h2{
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.registro_categorias form{
    width: 80%;
}

.registro_categorias .user-box {
  position: relative;
}

.registro_categorias .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.registro_categorias .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.registro_categorias .user-box input:focus ~ label,
.registro_categorias .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.registro_categorias form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  background: rgba(4, 4, 36, 0.945);
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 20px;
  letter-spacing: 4px
}

.registro_categorias button:hover{
  background: rgba(4, 4, 36, 0.945);
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

.registro_categorias button span {
  position: absolute;
  display: block;
}

.registro_categorias button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.registro_categorias button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.registro_categorias button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.registro_categorias button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}
@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>