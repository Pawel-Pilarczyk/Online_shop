<template>
    <div id='recommended'>
        <div id="rec-options">

            <h1 :class="recommendedSelected ? 'option-active' : ''"
                 @click="showRecommended">Recommened products</h1>

            <h1 :class="!recommendedSelected ? 'option-active' : ''"
                 @click="showSpecial">Special offers</h1>

        </div>
        <div id='recommended-products'>

                <div class='recommended-product'  v-for="product in products" :key="product.id">
                    <img :src='product.mainPicUrl'>

                    <h4>{{product.name}}</h4>

                    <h5 :class="product.specialPrice ? 'special-price' : ''">{{product.price}} $</h5>

                    <h5 v-if='product.specialPrice'>{{product.price * 0.8}} $</h5>

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
                specialPriceProducts:this.$store.state.products.filter(x => x.specialPrice === true),
                products: [],
                recommendedSelected:true,
            }
        },
        methods:{
            showRecommended(){
                this.products = this.recommendedProducts;
                this.recommendedSelected = true;
            },
            showSpecial(){
                this.products = this.specialPriceProducts;
                this.recommendedSelected = false
            }

        },
        mounted: function () {
            this.$nextTick(function () {
                this.products = this.recommendedProducts;
            })
        }

    }
</script>

<style>

</style>

