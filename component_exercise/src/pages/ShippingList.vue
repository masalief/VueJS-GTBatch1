<template>
    <div>
        <NavbarComponents></NavbarComponents>
        <BreadcrumbComponents></BreadcrumbComponents>
        <div class="row justify-content-center">
            <div class="col-10">
                <ShippingListTable v-show="!viewForm" @updateShippingFunc="updateShippingFunc"></ShippingListTable>
                <FormShippingComponents v-show="viewForm" :shippingDataProps="shippingData"></FormShippingComponents>
            </div>
        </div>
        <FooterComponents class="mt-4"></FooterComponents>
        <CopyrightComponents></CopyrightComponents>
    </div>
</template>

<script>
    import NavbarComponents from "../components/NavbarComponents.vue"
    import BreadcrumbComponents from "../components/BreadcrumbComponents.vue"
    import FooterComponents from "../components/FooterComponents.vue"
    import CopyrightComponents from "../components/CopyrightComponents.vue"
    import ShippingListTable from "../components/ShippingListTable.vue"
    import FormShippingComponents from "../components/FormShippingComponents.vue"

    export default {
        name: "ShippingList",
        components: {
            NavbarComponents, 
            BreadcrumbComponents,
            FooterComponents,
            CopyrightComponents,
            ShippingListTable,
            FormShippingComponents
        },
        methods: {
            updateShippingFunc(item){
                this.shippingData = item
                this.viewForm = true;
            }
        },
        data(){
            return{
                viewForm : false,
                shippingData: null
            }
        }
    }
</script>

<style>

</style>