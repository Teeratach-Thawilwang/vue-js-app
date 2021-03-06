import { createRouter, createWebHistory } from 'vue-router'

// import component
import demo1 from "../views/demo1_intro.vue"
import demo2 from "../views/demo2_event_method.vue"
import demo3 from "../views/demo3_data_variables.vue"
import demo4 from "../views/demo4_compute_method.vue"
import demo5 from "../views/demo5_binding.vue"
import demo6 from "../views/demo6_form_v_model"
import demo7 from "../views/demo7_slot"
import demo8 from "../views/demo8_vif_vshow_vfor.vue"
import demo9 from "../views/demo9_login_pin_pad.vue"

const routes = [{
    path: "/",
    name: "home",
    component: demo1
}, {
    path: "/demo1",
    name: "demo1",
    component: demo1
}, {
    path: "/demo2",
    name: "demo2",
    component: demo2
}, {
    path: "/demo3",
    name: "demo3",
    component: demo3
}, {
    path: "/demo4",
    name: "demo4",
    component: demo4
}, {
    path: "/demo5",
    name: "demo5",
    component: demo5
}, {
    path: "/demo6",
    name: "demo6",
    component: demo6
}, {
    path: "/demo7",
    name: "demo7",
    component: demo7
}, {
    path: "/demo8",
    name: "demo8",
    component: demo8
}, {
    path: "/demo9",
    name: "demo9",
    component: demo9
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router