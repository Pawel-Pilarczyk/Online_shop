<template>
    <div id='cart'>
        <table>
            <thead>
                <th>ID</th>
                <th>Product</th>
                <th>Price</th>
            </thead>

            <tr v-for="item in cartItems" :key="item.index">
                <td>{{ cartItems.indexOf(item) + 1}}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.specialPrice ? Math.floor(item.price * 0.8) : item.price}}$</td>
            </tr>


            <tr id="productCost">
                <td></td>
                <td>Total Price:</td>
                <td>{{ Math.floor(totalCost) }}$</td>
            </tr>

            <tr id="shippingCost">
                <td></td>
                <td>Shipping Cost</td>
                <td>{{ shippingCost }}$</td>
            </tr>

            <tfoot>
                <td id="totalCost"></td>
                <td>Total Cost</td>
                <td>{{ Math.floor(shippingCost + totalCost) }}$</td>
            </tfoot>

        </table>

         <button>Checkout</button>

    </div>
</template>

<script>
    export default {
        name:'Cart',
        data() {
            return {
            }
        },
        computed:{
            cartItems(){return this.$store.state.cart},
            totalCost(){return  this.$store.state.cart.reduce( (t, item) => {
                return item.specialPrice ? t + (item.price * 0.8) : t + item.price
            },0)},
            shippingCost(){return 200 * this.$store.getters.cartLength}
        }
    }
</script>
