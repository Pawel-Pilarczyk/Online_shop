<template>
    <div id="footer">
        <h1>Sofofo all rights reserved &#169;</h1>
        <router-link to="/controlPanel">Control Panel</router-link>
    </div>
</template>

<script>
    export default {
        name:'Footer'
    }
</script>
<style>
#footer{
    height: 6vh;
    width: 100%;
    background-color: grey;
    display: flex;
}
#footer h1{
  margin: auto;
  color: white;
  font-size:1.4rem;
}

#footer >a{
    font-size:1.3rem;
    color:white;
    font-weight: bold;
    margin: auto;
}

#footer >a:hover{

    color:black;


}
</style>