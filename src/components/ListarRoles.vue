<template>
    <div class="container">
        <h3 class="p-3 text-center">Listado de Roles</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID Rol</th>
                    <th>Status</th>
                    <th>Rol</th>
                    <th>ID Usuario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="rol in Rol" v-bind:key="rol.id">
                    <td>{{rol.id}}</td>
                    <td>{{rol.status}}</td>
                    <td>{{rol.rol}}</td>
                    <td>{{rol.userRol}}</td>
                    <td><router-link :to="'/Rol/ActualizarRoles/'+rol.id">Actualizar</router-link></td>
                    <td><router-link :to="'/Rol/BorrarRol/'+rol.id">Eliminar</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>

    import axios from 'axios';
   
    export default {

        name: "ListarRoles",
        data()
        {
            return {
                Rol: []
            }
        },
        mounted()
        {
            let vue =this;
            axios.get('https://sginventario-be.herokuapp.com/rol/')
           .then(function(response) {
                vue.Rol = response.data;
                console.log(vue.Rol)
           })
            

        },
    }
</script>

<style>

.information{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.information h1{
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.information h2{
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.information span{
    color: crimson;
    font-weight: bold;
}

.table-bordered {
    border: 1px solid #dee2e6;
}

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}
.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0,0,0,.05);
}
td {
  text-align: center;
  vertical-align: middle;
}
</style>