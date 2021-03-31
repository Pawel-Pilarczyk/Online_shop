<template>
    <div id='controlPanel'>

    <template v-if="!loggedIn" >

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
        <div id='productsPanel' >
            <table>
                <thead>
                    <td>Product</td>
                    <td>Edit</td>
                </thead>

                <tr v-for="product in products" :key='product.index'>
                    <td>{{product.name}}</td>
                    <td><button>EDIT</button></td>
                </tr>

            </table>

            <button id="addproduct">Add new Product</button>
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
                products: this.$store.state.products,
                loggedIn: false,

            }

        },
        methods:{
            logIn(){
                if(this.login === this.adminData.login && this.password === this.adminData.password){
                    this.loggedIn = true;
                    this.login="";
                    this.password ="";
                    alert('good')
                }else{
                    this.login="";
                    this.password ="";
                }
            }
        }
    }
</script>