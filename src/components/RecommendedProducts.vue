<template>
    <div id='recommended'>
        <div id="rec-options">

            <h1 :class="recommendedSelected ? 'option-active' : ''"
                 @click="recommendedSelected = true">Recommened products</h1>

            <h1 :class="!recommendedSelected ? 'option-active' : ''"
                 @click="recommendedSelected = false">Special offers</h1>

        </div>
        <div id='recommended-products'>

                <div class='recommended-product'  v-for="product in recommendedProducts" :key="product.id">
                    <img :src='product.mainPicUrl'>
                    <h4>{{product.name}}</h4>
                </div>

        </div>

        <button>Show More</button>

    </div>
</template>

<script>
    export default {
        name:'RecommendedProducts',
        data() {
            return {
                recommendedProducts: this.$store.state.products.filter(x => x.recommended === true),
                promotionalProducts : [],
                recommendedSelected:true,
            }
        },
        methods:{

        }
    }
</script>

<style>

</style>

