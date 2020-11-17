

// every Vue application starts by creating a new Application instance with the createAPP

// take the following as example:

const app = Vue.create({
    data() {
        return { count: 4}
    }
})

const vm = app.mount('#app')
console.log(vm.count) // => 4
/* 
// same as the upper codes
const RootComponent = { 
    data() {
        return { count: 4}
    }
}

const app = Vue.create(RootComponent)

const vm = app.mount('#app)
*/


// Lifecycle Hooks:
Vue.createApp({
    data() {
        return {count:1}
    },
    created() {
        // this points to the vm instance
        console.log('count is: ' + this.count)
    }
})
// there are also other hoos which will be call at different stages:
// mounted, updated, unmounted...


