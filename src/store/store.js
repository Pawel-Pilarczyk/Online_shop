import Vue from 'vue';
import Vuex from 'vuex';

import {products} from './data/products'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cart :[],
        products :products,
    },

    mutations:{
        addTotheCart(product){
            this.cart.push(product);
        }
    },

    getters:{

    },



});