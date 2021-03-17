<template>

    <div class="carousel-container">
        <div class="carousel-slide" :style="{transform: 'translate(-' + banerWidth + 'px)' }">
            <img src="../media/pics/baner3.jpg" id='lastClone' alt="">
            <img src="../media/pics/baner1.jpg" alt="" >
            <img src="../media/pics/baner2.jpg" alt="">
            <img src="../media/pics/baner3.jpg" alt="">
            <img src="../media/pics/baner1.jpg" id='firstClone' alt="">
        </div>

        <button id='prevBtn'>Prev</button>
        <button id='nextBtn' @click="incrementCounter">Next</button>

    </div>



</template>
<script>


//

export default {
    name:'Baner',
    data() {
        return {

            counter:1,

            banerWidth : document.querySelector('.carousel-slide').getBoundingClientRect().width,

        }
    },
    methods:{
        incrementCounter(){
            this.counter++
        },
        decrementCounter(){
            this.counter--
        }
    },
}

</script>
<style>

</style>