<template>

    <div id="productEdit">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <input type="text" v-model="name" :placeholder="name">
        <input type="number" :placeholder="stock" v-model="stock">
    </div>

</template>
<script>
    export default {
        name:'ProductEdit',
        data() {
            return {
                product: this.$store.state.products[this.$route.params.id],
                name: "",
                stock: NaN,
                dimensions: '',
                descryption:'',
                recommended : true,
                specialPrice: true,
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.name = this.product.name;
                this.stock = this.product.stock;
                this.dimensions = this.product.dimentions;
                this.descryption = this.product.description;
                this.recommended = this.product.recommended;
                this.specialPrice = this.product.specialPrice;
            })
        }
    }
</script>