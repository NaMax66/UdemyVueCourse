<template>
  <div>
    <h3>The AppAuthor component</h3>
  </div>
</template>

<script>
  export default {

  destroyed() {
    console.log('AppAuthor has been destroyed');
  },
  deactivated() {
    console.log("AppAuthor deactivated");
  },
  activated() {
    console.log("AppAuthor activated");
  }
  };
</script>

<style scoped>
</style>
