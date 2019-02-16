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
3. Usage
```html
<top-modal 
:open="showModal1"
:z-index="1000"
:close-on-bg-click="true"
:bg-image="'radial-gradient(50% 54%, #53A0FD 50%, #4F3EEB 200%)'"
:column-position="'center'"
:column-max-width="'300px'"
:modal-position="'center'"
:modal-border-radius="'5px'"
:modal-box-shadow="'0 0 9px 7px rgba(0,0,0,0.09)'"
@close="showModal1=false">
    <template v-slot:header></template>
    <template v-slot:content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat.
    </template>
    <template v-slot:footer></template>
</top-modal>
```
# Props
* `open` (Boolean): Open or close the modal.
* `z-index` (Number): Z-index of the modal.
* `close-on-bg-click` (Boolean): Trigger `close` event on background click.
* `bg` (String): Background behind the modal.
* `bg-image` (String): Background behind the modal, useful for images or gradients.
* `bg-animation` (String): Name of the animation to use. Default to `bg`
* `containerScrollable` (Boolean): Set to true if you want a scrollable modal.
* `column-position` (String): Set the horizontal alignment of the modal. Valid values are: `left`,`right`,`center`
* `column-right` (String): Space from right, eg. `10%`. Only valid if `column-position` is `right`.
* `column-left` (String): Space from left, eg. `10px`. Only valid if `column-position` is `left`.
* `column-max-width` (String): Set the max width of the modal. (for responsive use $mq | mq({...}) filters)
* `modal-animation` (String): Name of the animation to use. Default to `modal`
* `modal-position` (String): Set the vertical alignment of the modal. Valid values are: `top`,`bottom`,`center`
* `modal-top` (String): Space from top, eg. `10%`. Only valid if `modal-position` is `top`.
* `modal-bottom` (String): Space from bottom, eg. `10px`. Only valid if `modal-position` is `bottom`.
* `modal-border` (String): Border of the modal eg. `1px solid black`.
* `modal-border-radius` (String): Border radius of the modal. Eg. `5px`
* `modal-box-shadow` (String): Shadow of the modal
* `modal-height` (String): Height of the modal, default to `auto`
* `modal-background` (String): Background of the modal
* `content-padding` (String): Padding of the modal content slot. Default to `1em`
* `scroll-lock` (Boolean): Enable/Disable scroll lock. Enabled by default.

# Events
* `close`: Fired when the user click on the background behind the modal
* `closed`: Animations ended and modal unmounted

# Slots
* `header`
* `content`
* `footer`

# Authors

* **Adileo Barone**

# License

This project is licensed under the MIT License