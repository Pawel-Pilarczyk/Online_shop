<template>
    <div id="product">
        <h1>{{product.name}}</h1>
    </div>
</template>

<script>
    export default {
        name:'Product',
        data() {
            return {
              product: this.$store.state.products[this.$route.params.id],
            }
        },
        methods:{

        }
    }
</script>

<style>

</style>