<template>
    <div v-if="loaded" class="information">
        <h1>Información de las categorias</h1>
        <h2>Nombre Producto: <span>{{nombre}}</span></h2>
        <h2>Precio de Venta: <span>{{precio_venta}}</span></h2>
        <h2>Existencias: <span>{{existencias}}</span></h2>
        <h2>ID Categoria: <span>{{categoria_id}}</span></h2>
    </div>
</template>

<script>
    import jwt_decode from "jwt-decode";
    import axios from 'axios';

    export default {

        name: "ListarProductos",
        data: function(){
            return {
                nombre: "",
                precio_venta: "",
                existencias: "",
                categoria_id: "",
                loaded: false,
            }
        },

        methods: {
            getData: async function () {
                if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                    this.$emit('logOut');
                    return;
                }
                await this.verifyToken();

                let token = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();
                axios.get(`https://sginventario-be.herokuapp.com/ListarProductos/`, {headers: {'Authorization': `Bearer ${token}`}})
                    .then((result) => {
                        this.nombre = result.data.nombre;
                        this.precio_venta = result.data.precio_venta;
                        this.existencias = result.data.existencias;
                        this.categoria_id = result.data.categoria_id;
                        this.loaded = true;
                    })

                    .catch(() => {
                        this.$emit('logOut');
                    });
            },
            verifyToken: function () {
            return axios.post("https://sginventario-be.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}}
            )
                    .then((result) => {
                    localStorage.setItem("token_access", result.data.access);
                    })

                    .catch(() => {
                    this.$emit('logOut');
                    });
            }
        },

        created: async function(){
            this.getData();
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

</style>