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

    </div>

</template>

<script>
    export default {
        name:'ControlPanel',
        data() {
            return {
                loggedIn : false,
                adminData :{login:'admin',password:'admin'},
                login:'',
                password:'',
            }
        },
        methods:{
            logIn(){
                if(this.login === this.adminData.login && this.password === this.adminData.password){
                    this.loggedIn = true;
                }else{

                }
            }
        }
    }
</script>