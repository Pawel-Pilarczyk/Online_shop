<template>

    <div id="productEdit">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <form>
            <input type="text" name="productName" v-model="productName" :placeholder="productName">
            <input type="number" :placeholder="stock" v-model="stock">
            <input type="text" :placeholder="dimensions" v-model="dimensions">
            <textarea type="text" :placeholder="description" v-model="description"></textarea>
            <input type="checkbox" name="recommended"  v-model="recommended">
            <input type="checkbox" name="specialPrice"  v-model="specialPrice">
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
                this.stock = this.product.stock;
                this.dimensions = this.product.dimentions;
                this.description = this.product.description;
                this.recommended = this.product.recommended;
                this.specialPrice = this.product.specialPrice;
            })
        }
    }
</script>