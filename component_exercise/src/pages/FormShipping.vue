<template>
    <div>
        <NavbarComponents></NavbarComponents>
        <BreadcrumbComponents></BreadcrumbComponents>
        <FormShippingComponents></FormShippingComponents>
        <SuccessFormComponents class="d-none"></SuccessFormComponents>
        <FooterComponents></FooterComponents>
        <CopyrightComponents></CopyrightComponents>
    </div>
    
</template>

<script>
    import NavbarComponents from "../components/NavbarComponents.vue"
    import BreadcrumbComponents from '../components/BreadcrumbComponents.vue'
    import CopyrightComponents from '../components/CopyrightComponents.vue'
    import FormShippingComponents from "../components/FormShippingComponents.vue"
    import SuccessFormComponents from "../components/SuccessFormComponents.vue"
    import FooterComponents from "../components/FooterComponents.vue"

    export default {    
        name: "ShippingPage",
        
        components : {
            NavbarComponents,
            BreadcrumbComponents,
            CopyrightComponents,
            FormShippingComponents,
            SuccessFormComponents,
            FooterComponents
        },

    }

</script>

<style>
    
</style>