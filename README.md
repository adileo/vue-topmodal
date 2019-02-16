<p align="center">
<img src="https://github.com/adileo/vue-topmodal/raw/master/topmodal.png" width="480" alt="Screenshot"/>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/vue-topmodal"><img src="https://img.shields.io/npm/v/vue-topmodal.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg"/></a>
</p>

<p align="center">
A fully customisable Vue.js modal component.
</p>

# Features
* Fully Customisable (borders, shadow, position, colors, backgrounds, width, etc...)
* Responsive
* Scrollable (with lock scroll on body)
* Stackable (with z-index)
* Animated (separate animations for background and modal window)
* Auto-close on background click
* Header / Footer / Content Slots

Demo: [jsFiddle](https://jsfiddle.net/adileo/eqah2189/)
# Getting started

1. Install the component:

```
npm install --save vue-topmodal
```
```
yarn add vue-topmodal
```

2. (Option A) Add the component into your app:

```javascript
import Vue from 'vue'
import TopModal from 'vue-topmodal'

Vue.component('top-modal', TopModal)
```

2. (Option B) Include JS & CSS:
```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/vue-topmodal/dist/TopModal.css">
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-topmodal"></script>
<script>
new Vue({
  components: {
    TopModal,
  },
  el: "#app",
})
</script>
```
## Authors

* **Adileo Barone**

# License

This project is licensed under the MIT License