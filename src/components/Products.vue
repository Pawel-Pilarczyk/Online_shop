<template>
    <div >
        <form id="filterForm">
            <label for="filterOption"> Filter:</label>
            <select name="filterOption" id="filterOption" v-model="productFilterOption">
                <option value="specialPrice">Special Price</option>
                <option value="recommended">Recommended</option>
            </select>
            <button @click.prevent="filterProducts(productFilterOption)" :disabled="productFilterOption === ''">Filter</button>
            <button @click.prevent="resetFilter">Reset Filter</button>
        </form>

        <div id="productsDisplay">
            <div class='productItem' v-for="product in products" :key='product.index'>
                <router-link :to="{ name: 'product', params: { id: product.index }}"><img :src="product.mainPicUrl" alt=""></router-link>
                <h1>{{product.name}}</h1>
                <h2>{{ product.specialPrice ? Math.floor(product.price * 0.8) : product.price}}$$</h2>
            </div>
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
               productFilterOption :'',
            }
        },
        methods:{
            filterProducts(option){
                this.products = this.$store.state.products.filter(x => x[option]);
            },
            resetFilter(){
                this.products = this.$store.state.products;
            }
        },
    }
</script>
