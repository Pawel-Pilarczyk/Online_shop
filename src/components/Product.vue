<template>
    <div>
        <div id="displayItem">
            <img :src="product.mainPicUrl" alt="">

            <div id="product-info">
                <h1>{{product.name}}</h1>
                <ul>
                    <li class="price" :class="product.specialPrice ? 'special-price' : ''">{{product.price}} $</li>
                    <li class="price" v-if='product.specialPrice'>{{product.price * 0.8}} $</li>
                    <li>Dimentions {{ product.dimentions }}</li>
                    <li>Stock: {{product.stock}}</li>
                </ul>


                <button @click="addTotheCart(product.index)">Add to the cart</button>
            </div>



            <p>{{product.description}}</p>
        </div>
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
            addTotheCart(id){
                this.$store.commit('addTotheCart',{id:id})
            }
        }
    }
</script>

<style>

</style>