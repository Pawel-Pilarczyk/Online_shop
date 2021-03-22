<template>
    <div id="product">
        <img :src="product.mainPicUrl" alt="">
        <h1>{{product.name}}</h1>

        <h5 :class="product.specialPrice ? 'special-price' : ''">{{product.price}} $</h5>
        <h5 v-if='product.specialPrice'>{{product.price * 0.8}} $</h5>
        <h5>Dimentions {{ product.dimentions }}</h5>
        <h5>Stock: {{product.stock}}</h5>

        <button>Add to the cart</button>


        <p>{{product.description}}</p>
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