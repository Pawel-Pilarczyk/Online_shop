<template>
    <div id="productDisplay">
        <img :src="product.mainPicUrl" alt="">

        <div id="product-info">
            <h1>{{product.name}}</h1>
            <ul>
                <li class="price" :class="product.specialPrice ? 'special-price' : ''">{{product.price}} $</li>
                <li class="price" v-if='product.specialPrice'>{{product.price * 0.8}} $</li>
                <li>Dimentions {{ product.dimentions }}</li>
                <li>Stock: {{product.stock}}</li>
            </ul>


            <button>Add to the cart</button>
        </div>



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