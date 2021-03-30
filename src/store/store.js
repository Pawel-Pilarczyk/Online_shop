import Vue from 'vue';
import Vuex from 'vuex';

import {products} from './data/products'

Vue.use(Vuex);

const newProduct =
    (index,pName,stock,price,mailPicUrl,dimentions,description,inStock,recommened,specialPrice) =>
{
    this.index = index;
    this.name = pName;
    this.stock = stock;
    this.price = price;
    this.mainPicUrl = mailPicUrl;
    this.pic1 = '';
    this.pic2 = '';
    this.dimentions = dimentions;
    this.description = description;
    this.inStock= inStock;
    this.recommended= recommended;
    this.specialPrice= specialPrice;
}

export default new Vuex.Store({
    state:{
        cart :[],
        products :products,
    },

    mutations:{
        addTotheCart(state,payload){
            if(!state.cart.includes(products[payload.id])){
                state.cart.push(state.products[payload.id]);
                state.products[payload.id].stock--;
            }
        },
        addToTheProducts(state,payload){
            state.products.push(
                new newProduct(payload.newProduct)
            )
        }
    },

    getters:{
        cartLength(state){
            return state.cart.length;
        }
    },

});