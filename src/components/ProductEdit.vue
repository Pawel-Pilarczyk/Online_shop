<template>

    <div id="productEdit">

        <h1>{{productName}}</h1>

        <form>

            <section>
                <label for="productName">Product Name:</label>
                <input type="text" name="productName" v-model="productName" :placeholder="productName">
            </section>
            
            <section>
                <label for="productPrice">Product Price:</label>
                <input type="text" name="productPrice" v-model="productPrice" :placeholder="productPrice">
            </section>

            <section>
                <label for="stockNumber">Stock:</label>
                <input type="number" name='stockNumber' :placeholder="stock" v-model="stock">
            </section>

            <section>
                <label for="dimensions">Dimentions(pattern aa x bb x cc)</label>
                <input type="text" name='dimensions' :placeholder="dimensions" v-model="dimensions">
            </section>

            <section>
                <label for="description">Description</label>
                <textarea name='description' :placeholder="description" v-model="description"></textarea>
            </section>

            <section>
                <label for="recommended">Recommended:</label>
                <input type="checkbox" name="recommended"  v-model="recommended">
            </section>

            <section>
                <label for="specialPrice">Special Price:</label>
                <input type="checkbox" name="specialPrice"  v-model="specialPrice">
            </section>
            
            <input type="button" value="Update Product">
            <input type="button" value="Remove Product">

        </form>

    </div>

</template>
<script>
    export default {
        name:'ProductEdit',
        data() {
            return {
                product: this.$store.state.products[this.$route.params.id],
                productName: "",
                productPrice: NaN,
                stock: NaN,
                dimensions: '',
                description:'',
                recommended : true,
                specialPrice: true,
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.productName = this.product.name;
                this.productPrice = this.product.price;
                this.stock = this.product.stock;
                this.dimensions = this.product.dimentions;
                this.description = this.product.description;
                this.recommended = this.product.recommended;
                this.specialPrice = this.product.specialPrice;
            })
        }
    }
</script>