<template>
  <div v-if="mounted" class="topmodal-container" :style="containerStyle">
    <transition :name="bgAnimation" appear>
      <div v-show="showModal" class="topmodal-bg" :style="bgStyle" @click="bgClicked">
      </div>
    </transition>
    <div class="topmodal-scroll-container topmodal-scrollable-lock" :class="{'topmodal-scrollable': containerScrollable}" @click="bgClicked">
      <transition :name="modalAnimation" v-on:after-leave="closed" v-on:after-enter="opened" appear>
        <div v-show="showModal" class="topmodal-column" :style="columnStyle" @click="bgClicked">
          <div class="topmodal-modal" :style="modalStyle" v-on:click.stop>
            <slot name="header"></slot>
            <div class="topmodal-content" :style="contentStyle">
              <slot name="content"></slot>
            </div>
            <slot name="footer"></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
export default {
  name: 'HelloWorld',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
      default: 'rgba(0,0,0,0.5)'
    },
    bgImage: {
      type: String,
      default: null
    },
    bgAnimation: {
      type: String,
      default: 'bg'
    },
    containerScrollable: {
      type: Boolean,
      default: false,
    },
    columnPosition: {
      type: String,
      default: 'center'
    },
    columnRight: {
      type: String,
      default: '0px'
    },
    columnLeft: {
      type: String,
      default: '0px'
    },
    columnMaxWidth: {
      type: String,
      default: '900px'
    },
    modalPosition: {
      type: String,
      default: 'center'
    },
    modalAnimation: {
      type: String,
      default: 'modal'
    },
    modalTop: {
      type: String,
      default: '0px'
    },
    modalBottom: {
      type: String,
      default: '0px'
    },
    modalHeight: {
      type: String,
      default: 'auto'
    },
    modalBorderRadius: {
      type: String,
      default: '5px'
    },
    modalBoxShadow: {
      type: String,
      default: null
    },
    modalBackground: {
      type: String,
      default: 'white'
    },
    modalBorder: {
      type: String,
      default: '0px'
    },
    contentPadding: {
      type: String,
      default: '1em'
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    scrollLock: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      showModal: false,
      mounted: false
    }
  },
  watch: {
    open: function(newV){
      this.switchOpen(newV)
    }
  },
  computed: {
    bgStyle: function () {
      return {
        'background': this.bg,
        'background-image': this.bgImage
      }
    },
    contentStyle: function () {
      var styles = {
        'padding': this.contentPadding
      }
      return styles
    },
    modalStyle: function () {
      var styles = {
        'position': 'relative',
        'border-radius': this.modalBorderRadius,
        'box-shadow': this.modalBoxShadow,
        'height': this.modalHeight,
        'background': this.modalBackground,
        'border': this.modalBorder
      }
      if(this.modalPosition === 'center'){
        styles = {
          ...styles,
          'top': '50%',
          'transform': 'translateY(-50%)',
        }
      }
      if(this.modalPosition === 'top'){
        styles = {
          ...styles,
          'position': 'relative',
          'margin-top': this.modalTop,
          'margin-bottom': this.modalTop,
        }
      }
      if(this.modalPosition === 'bottom'){
        styles = {
          ...styles,
          'position': 'absolute',
          'bottom': this.modalBottom,
        }
      }
      return styles
    },
    columnStyle: function () {
      var styles = {
        'max-width': this.columnMaxWidth,
        'position': 'relative',
      }
      if(this.columnPosition === 'center'){
        styles = {
          ...styles,
          'margin': 'auto',
        }
      }
      if(this.columnPosition === 'left'){
        styles = {
          ...styles,
          'position': 'absolute',
          'top': '0px',
          'left': this.columnLeft,
        }
      }
      if(this.columnPosition === 'right'){
        styles = {
          ...styles,
          'position': 'absolute',
          'top': '0px',
          'right': this.columnRight,
        }
      }
      return styles
    },
    containerStyle: function () {
      return {
        'z-index': this.zIndex
      }
    }
  },
  methods: {
    bgClicked: function () {
      this.$emit('bg-click')
    },
    closed: function () {
      this.mounted = false
      this.$emit('closed')
    },
    opened: function () {
      this.$emit('opened')
    },
    switchOpen: function (newV) {
      if(newV){
        this.mounted = true
        this.showModal = true
        if(this.scrollLock){
          this.$nextTick(() => {
            var elements = this.$el.querySelectorAll(".topmodal-scrollable-lock")
            for (var i = 0; i < elements.length; ++i) {
              disableBodyScroll(elements[i])
            }
          })
        }
      }else{
        this.showModal = false
        if(this.scrollLock && this.open === true){
          var elements = this.$el.querySelectorAll(".topmodal-scrollable-lock")
          for (var i = 0; i < elements.length; ++i) {
            enableBodyScroll(elements[i])
          }
        }
      }
    }
  },
  mounted: function () {
    this.switchOpen(this.open)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.topmodal-scrollable{
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>

<style scoped>
.topmodal-container{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.topmodal-scroll-container{
  position: relative;
  width: 100%;
  height: 100%;
}
.topmodal-bg{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.topmodal-column{
  height: 100%;
  width: 100%;
}
.topmodal-modal{
  width: 100%;
}


.bg-enter-active, .bg-leave-active {
  transition: opacity .5s;
}
.bg-enter, .bg-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.modal-enter-active {
  animation: bounce-in .5s;
}
.modal-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
