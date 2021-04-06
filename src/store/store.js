import Vue from 'vue';
import Vuex from 'vuex';

import {products} from './data/products'

Vue.use(Vuex);

const newProduct = (index) => {
    this.index = index;
    this.name= '';
    this.stock = 0;
    this.price = 0;
    this.mainPicUrl = '';
    this.dimentions ='aa x bb x cc';
    this.description ='';
    this.inStock = false;
    this.recommended = false;
    this.specialPrice = false;
};

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
                new newProduct(newProduct(payload.index))
            )
        },

        updateProduct(state,payload){
            state.products[payload.id] = payload.product;
        },

        removeProduct(state,payload){
            let index = state.products.indexOf(payload.product);
            state.products.splice(index,1);
        }
    },

    getters:{
        cartLength(state){
            return state.cart.length;
        }
    },

});