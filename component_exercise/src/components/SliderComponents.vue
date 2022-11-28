<template>
<div>
    <div class="container-fluid px-5 bg-light py-5 mt-5">
        <h3>Complete Your Room</h3>
        <h3>With What We Design</h3>
        <div class="varian d-flex justify-content-around">
            <CardComponents cardTittle="Cangkir Mauttie" cardPrice="89.300.000" cardImage="chair-1"></CardComponents>
            <CardComponents cardTittle="Saman Kakka" cardPrice="14.500.000" cardImage="chair-2"></CardComponents>
            <CardComponents cardTittle="Lino Dino" cardPrice="22.000.000" cardImage="chair-3"></CardComponents>
            <CardComponents cardTittle="Syail Ameno" cardPrice="12.000.000" cardImage="chair-4"></CardComponents>
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
};
</script>

<style>

</style>