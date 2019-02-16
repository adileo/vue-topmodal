import Vue from 'vue'
import TopModal from '@/components/TopModal'

const components = {
    TopModal
}

Object.keys(components).forEach((name) => {
    Vue.component(name, components[name])
})

export default components