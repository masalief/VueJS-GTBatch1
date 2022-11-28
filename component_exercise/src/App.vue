<template>

<div id="app">
    <NavbarComponents></NavbarComponents>
    <BreadcrumbComponents></BreadcrumbComponents>
    <GalleryComponents></GalleryComponents>
    <SliderComponents></SliderComponents>
    <FooterComponents></FooterComponents>
    <CopyrightComponents></CopyrightComponents>
</div>

</template>

<script>
import NavbarComponents from "./components/NavbarComponents.vue"
import BreadcrumbComponents from './components/BreadcrumbComponents.vue'
import GalleryComponents from './components/GalleryComponents.vue'
import SliderComponents from './components/SliderComponents.vue'
import FooterComponents from './components/FooterComponents.vue'
import CopyrightComponents from './components/CopyrightComponents.vue'

export default {    
    name: "App",
    
    components : {
        NavbarComponents,
        BreadcrumbComponents,
        GalleryComponents,
        SliderComponents,
        FooterComponents,
        CopyrightComponents,
    },
};
</script>

<style>
    
</style>