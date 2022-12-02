import Detail from "./pages/Detail.vue";
import FormShipping from "./pages/FormShipping.vue";
import ShippingList from "./pages/ShippingList.vue";

export default [
    {
        path : "/detail",
        component : Detail,
    },

    {
        path : "/formshipping",
        component : FormShipping,
    },

    {
        path: "/shippinglist",
        component: ShippingList,
    },
];