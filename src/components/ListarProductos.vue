<template>
    <div class="container">
        <h3 class="p-3 text-center">Listado de Productos</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Descripción de Producto</th>
                    <th>Precio de Venta</th>
                    <th>Existencias</th>
                    <th>Id Categoría</th>
                    <th>Actualizar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productos" v-bind:key="producto.idProducto">
                    <td>{{producto.nombre}}</td>
                    <td>{{producto.precio_venta}}</td>
                    <td>{{producto.existencias}}</td>
                    <td>{{producto.categoria}}</td>
                    <td><router-link :to="'/productos/ActualizarProductos/'+producto.idProducto">Actualizar</router-link></td>
                    <td><router-link :to="'/productos/BorrarProductos/'+producto.idProducto">Eliminar</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
    import axios from 'axios';
   
    export default {
        name: "ListarProductos",
        data()
        {
            return {
                productos: []
            }
        },
        mounted()
        {
            let vue =this;
            axios.get('https://sginventario-be.herokuapp.com/productos/')
           .then(function(response) {
                vue.productos = response.data;
                console.log(vue.productos)
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