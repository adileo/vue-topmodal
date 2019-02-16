<template>
  <div id="app">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
    <button @click="showModal1 = true">Show Modal 1</button>
    <button @click="showModal3 = true">Show Modal 3</button>
    <button @click="showModal4 = true">Show Modal 4</button>
    <top-modal 
    :open="showModal1"
    :z-index="1000"
    :close-on-bg-click="true"
    :bg-image="'radial-gradient(50% 54%, #53A0FD 50%, #4F3EEB 200%)'"
    :column-position="'center'"
    :column-max-width="$mq | mq({
      sm: '350px',
      md: '500px',
      lg: '600px'
    })"
    :modal-position="'center'"
    :modal-top="'10%'"
    :modal-border-radius="'5px'"
    :modal-box-shadow="'0 0 9px 7px rgba(0,0,0,0.09)'"
    @close="showModal1=false"
    >
    <template v-slot:content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
      <button @click="showModal2 = true">showModal2</button>
    </template>
    </top-modal>
    <top-modal 
    :open="showModal2"
    :z-index="1200"
    :close-on-bg-click="true"
    :bg-image="'radial-gradient(50% 54%, #53A0FD 50%, #4F3EEB 200%)'"
    :column-position="'center'"
    :column-max-width="$mq | mq({
      sm: '350px',
      md: '500px',
      lg: '600px'
    })"
    :modal-position="'center'"
    :modal-top="'10%'"
    :modal-border-radius="'5px'"
    :modal-box-shadow="'0 0 9px 7px rgba(0,0,0,0.09)'"
    @close="showModal2=false"
    >
    <template v-slot:content>
      Stacked Modal 2
    </template>
    </top-modal>

    <top-modal 
    :open="showModal3"
    :z-index="1000"
    :close-on-bg-click="true"
    :bg-image="'radial-gradient(50% 54%, #53A0FD 50%, #4F3EEB 200%)'"
    :column-position="'center'"
    :column-max-width="$mq | mq({
      sm: '100%',
      md: '500px',
      lg: '600px'
    })"
    :modal-position="'top'"
    :modal-top="'0px'"
    :modal-height="'100%'"
    :modal-border-radius="'0px'"
    :modal-box-shadow="'0 0 9px 7px rgba(0,0,0,0.09)'"
    @close="showModal3=false"
    >
    <template v-slot:content>
      <div class="popmodal-scrollable popmodal-scrollable-lock" style="width: 100%;height: 100px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
      </div>
    
      <button @click="showModal3 = false">Close</button>
    </template>
    </top-modal>

    <top-modal 
    :open="showModal4"
    :z-index="1000"
    :close-on-bg-click="true"
    :bg-image="'radial-gradient(50% 54%, #53A0FD 50%, #4F3EEB 200%)'"
    :container-scrollable="true"
    :column-position="'center'"
    :column-max-width="$mq | mq({
      sm: '350px',
      md: '500px',
      lg: '600px'
    })"
    :modal-position="'top'"
    :modal-top="'10%'"
    :modal-border-radius="'5px'"
    :modal-box-shadow="'0 0 9px 7px rgba(0,0,0,0.09)'"
    @close="showModal4=false"
    >
    <template v-slot:content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ipsum a dolor ultricies volutpat. Quisque in ornare tortor. Cras ut mi efficitur, varius massa vitae, porttitor neque. Aliquam sollicitudin dignissim libero, sed congue nibh auctor et. Duis fringilla lorem ultricies elit euismod malesuada. Fusce consequat sem ac maximus luctus. Ut imperdiet libero magna, ut consectetur lorem ornare a. Morbi pharetra urna lacus, tincidunt semper purus suscipit posuere. Quisque at sollicitudin nisi. In sed purus id eros aliquet hendrerit sit amet sit amet lectus. Mauris molestie, lorem hendrerit hendrerit pulvinar, dolor tortor accumsan sem, id volutpat tellus diam nec tellus. Donec nibh eros, sodales ac ullamcorper ut, blandit nec nisl. Cras ultricies diam id massa facilisis fringilla.
      <button @click="showModal4 = false">close</button>
    </template>
    </top-modal>
  </div>
</template>

<script>
import TopModal from './components/TopModal.vue'

export default {
  name: 'app',
  components: {
    TopModal
  },
  data: function () {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    }
  }
}
</script>

<style>

</style>
