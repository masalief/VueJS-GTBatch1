<template>
    <div>
        <div class="container-fluid px-5 bg-light py-5 mt-5">
            <h3>Complete Your Room</h3>
            <h3>With What We Design</h3>
            <div class="varian d-flex justify-content-around">
                <CardComponents v-for="(item, index) in arrCardTitle"
                    :key="index"
                    :cardTitle="item"
                    :cardPrice="arrCardPrice[index]"
                    :cardImage="arrCardImage[index]"
                    @changePicture="changePictureFunc">
                </CardComponents>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import CardComponents from './CardComponents.vue';
    
    export default {
        name : "SliderComponents",
        components : {
            CardComponents
        },

        methods : {
            changePictureFunc : function(cardImage){
                this.$emit('changePicture', cardImage)
            }
        },
        
        data : function(){
            return{
                arrCardImage : ["chair-4", "chair-3", "chair-2", "chair-1"],
                arrCardTitle : ["Cangkir Mauttie", "Saman Kakka", "Lino Dino", "Syail Ameno"],
                arrCardPrice : ["IDR 89.300.000", "IDR 14.500.000", "IDR 22.000.000", "IDR 12.000.000"],
            }
        },
    }
    </script>
    
    <style>
    
    </style>