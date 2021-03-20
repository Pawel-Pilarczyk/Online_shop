<template>
    <div id='recommended'>
        <h1>Recommened products</h1>
        <div id='recommended-products'>

                <img v-for="product in recommendedProducts" :key="product.id" :src='product.mainPicUrl'>

        </div>

    </div>
</template>

<script>
    export default {
        name:'RecommendedProducts',
        data() {
            return {
                recommendedProducts: this.$store.state.products.filter(x => x.recommended === true),
            }
        },
        methods:{

        }
    }
</script>

<style>

</style>

