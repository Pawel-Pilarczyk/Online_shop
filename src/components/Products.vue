<template>

    <div id="productsDisplay">
        <div class='productItem' v-for="product in products" :key='product.index'>
            <router-link :to="{ name: 'product', params: { id: product.index }}"><img :src="product.mainPicUrl" alt=""></router-link>
            <h1>{{product.name}}</h1>
            <h2>{{ product.price }}$$</h2>
        </div>
    </div>

</template>
<script>
import Product from './Product.vue'
    export default {
  components: { Product },
        name:'Products',
        data() {
            return {
                products: this.$store.state.products,
            }
        },
    }
</script>
