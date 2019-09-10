<template>
  <div>
    <h3>The AppNew component</h3>
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    destroyed() {
      console.log('AppNew has been destroyed');
    },
    deactivated() {
      console.log("AppNew deactivated");
    },
    activated() {
      console.log("AppNew activated");
    }
  };
</script>

<style scoped>
</style>
