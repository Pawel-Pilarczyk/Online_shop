<template>
    <div id='controlPanel'>

    <template v-if="!loggedIn" >

        <h2>Login: admin</h2>
        <h2>password: admin</h2>

        <form id='loginForm'>
            <h1>Log In</h1>
            <label for="login">Login</label>
            <input type="text" name="login" v-model="login">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password">

            <input type="submit" value="Sign IN" @click.prevent='logIn'>
        </form>

    </template>

    <template v-else>
        <div id='productsPanel'>
            <table>
                <thead>
                    <td>Product</td>
                    <td>Edit</td>
                </thead>

                <tr v-for="product in products" :key='product.index'>
                    <td>{{product.name}}</td>
                    <td><router-link :to="{ name: 'productEdit', params: { id: $store.state.products.indexOf(product) }}"><button>EDIT</button></router-link></td>

                </tr>

            </table>

            <button>Add new Product</button>
        </div>
     </template>

    </div>

</template>

<script>

    export default {
        name:'ControlPanel',
        data() {
            return {
                adminData :{login:'admin',password:'admin'},
                login:'',
                password:'',
                loggedIn: false,

            }

        },
        methods:{
            logIn(){
                if(this.login === this.adminData.login && this.password === this.adminData.password){
                    this.loggedIn = true;
                    this.login="";
                    this.password ="";
                }else{
                    this.login="";
                    this.password ="";
                }
            }
        },
        computed:{
            products(){return this.$store.state.products },
        }
    }
</script>