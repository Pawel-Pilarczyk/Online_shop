<template>

    <div id="productEdit">

        <h1>{{product.name}}</h1>
        <a @click="$router.go(-1)"><input type="button" value="Go Back"></a>

        <form>

            <section>
                <label for="productName">Product Name:</label>
                <input type="text" name="productName" v-model="product.name" :placeholder="product.name">
            </section>

            <section>
                <label for="mainPicUrl">Product Picture:</label>
                <input type="text" name="mainPicUrl" v-model="product.mainPicUrl" :placeholder="product.mainPicUrl">
            </section>

            <section>
                <label for="productPrice">Product Price:</label>
                <input type="number" name="productPrice" v-model="product.price" :placeholder="product.price">
            </section>

            <section>
                <label for="stockNumber">Stock:</label>
                <input type="number" name='stockNumber' :placeholder="product.stock" v-model="product.stock">
            </section>

            <section>
                <label for="dimensions">Dimentions( aa x bb x cc)</label>
                <input type="text" name='dimensions' :placeholder="product.dimentions" v-model="product.dimentions">
            </section>

            <section>
                <label for="description">Description</label>
                <textarea name='description' :placeholder="product.description" v-model="product.description"></textarea>
            </section>

            <section>
                <label for="recommended">Recommended:</label>
                <input type="checkbox" name="recommended"  v-model="product.recommended">
            </section>

            <section>
                <label for="specialPrice">Special Price:</label>
                <input type="checkbox" name="specialPrice"  v-model="product.specialPrice">
            </section>

            <section>
                <a @click="$router.go(-1)"><input type="button" value="Update Product" @click.prevent="updateProduct"></a>
                <a @click="$router.go(-1)"><input type="button" value="Remove Product" @click="removeProduct"></a>

            </section>


        </form>

    </div>

</template>

<script>
    export default {
        name:'ProductEdit',
        data() {
            return {
                product: this.$store.state.products[this.$route.params.id],
            }
        },
        methods:{
            updateProduct(){
                this.$store.commit('updateProduct',{id: this.product.index, product: this.product});
                alert("Product Updated");
            },
            removeProduct(){
                this.$store.commit('removeProduct',{product: this.product});
                alert("Product Removed");
            }
        }
    }
</script>