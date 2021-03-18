<template>

    <div class="carousel-container">
        <div class="carousel-slide" :style="{transform: 'translate(-' + banerWidth * counter + 'px)' }">
            <img src="../media/pics/baner1.jpg" alt="" >
            <img src="../media/pics/baner2.jpg" alt="">
            <img src="../media/pics/baner3.jpg" alt="">
        </div>

        <button id='prevBtn' @click="decrementCounter"><</button>
        <button id='nextBtn' @click="incrementCounter">></button>

    </div>

</template>

<script>

export default {
    name:'Baner',
    data() {
        return {

            counter:0,

            banerWidth : 0,

        }
    },
    methods:{
        incrementCounter(){
            this.counter >= 2 ? this.counter = 0 : this.counter++;
        },
        decrementCounter(){
            this.counter--
            if(this.counter <= -1){
                this.counter = 2;
            }
        },
        myEventHandler(e) {
            this.banerWidth = document.querySelector('.carousel-slide').getBoundingClientRect().width;
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
        document.addEventListener('DOMContentLoaded', this.myEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
        document.addEventListener('DOMContentLoaded', this.myEventHandler);
    },
}

</script>
<style>

</style>