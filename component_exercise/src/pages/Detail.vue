<template>
    <div>
        <NavbarComponents></NavbarComponents>
        <BreadcrumbComponents></BreadcrumbComponents>
        <GalleryComponents :stylingProps="styling" :imgLink="img"></GalleryComponents>
        <SliderComponents @changePicture="ambilDariSlider"></SliderComponents>
        <FooterComponents></FooterComponents>
        <CopyrightComponents></CopyrightComponents>
        <CardComponents></CardComponents>
        
    </div>
    
</template>

<script>
    import NavbarComponents from "../components/NavbarComponents.vue"
    import BreadcrumbComponents from '../components/BreadcrumbComponents.vue'
    import GalleryComponents from '../components/GalleryComponents.vue'
    import SliderComponents from '../components/SliderComponents.vue'
    import FooterComponents from '../components/FooterComponents.vue'
    import CopyrightComponents from '../components/CopyrightComponents.vue'
    import CardComponents from '../components/CardComponents.vue'

    export default {    
        name: "DetailPage",
        
        components : {
            NavbarComponents,
            BreadcrumbComponents,
            GalleryComponents,
            SliderComponents,
            FooterComponents,
            CopyrightComponents,
            CardComponents,
        },

        data() {
            return {
                img : "chair",
                styling : null
            }
        },

        methods : {
            ambilDariSlider : function(cardimage1){
                this.img = cardimage1;
                this.styling = { width : 560 + "px", height : 690 + "px" };
            }
        },
    };
</script>

<style>
    
</style>