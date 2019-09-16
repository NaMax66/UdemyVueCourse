<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <h2>{{text | toUpperCase | to-lowercase }}</h2>
        <hr>
        <input type="text" v-model="filterText">
        <ul style="margin-top: 2rem">
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
        <p v-if="filteredFruits.length === 0"
           style="color: #bdbdbd">Nothing to show</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Hello vue!',
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        filterText: ''
      }
    },
    filters: {
      toUpperCase(txt){
        return txt.toUpperCase();
      }
    },
    computed: {
      /*nice way to make filter*/
      filteredFruits() {
        return this.fruits.filter( el => {
          return el.match(this.filterText);
        })
      }
    }

  };
</script>

<style>

</style>
