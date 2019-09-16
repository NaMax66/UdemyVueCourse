<template>
  <div class="row">
    <h1>AppList.vue file</h1>
    <input type="text" v-model="filterText">
    <ul style="margin-top: 2rem">
      <li v-for="fruit in filteredFruits">{{fruit}}</li>
    </ul>
    <p v-if="filteredFruits.length === 0"
       style="color: #bdbdbd">Nothing to show</p>
  </div>
</template>

<script>
  import { fruitMixin } from './fruitMixin.js'
  export default {
    name: 'AppList',
    mixins: [fruitMixin],
    created() {
      console.log('inside AppList');
    }
  };
</script>

<style>

</style>
